import React, {useReducer} from 'react'
import {v4} from 'uuid'
import ContactContext from './contactContext'
import ContactReducer from './contactReducer'
import {ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER} from '../types'

const ContactState = props => {
    const initialState = {
        contacts:[
            {
                type: "personal",
                id: 1,
                name: "Ted",
                email: "ted@gmail.com",
                phone: "07011189318",
                user: "5e561f8345f0b5558c9df4df",
                date: "2020-02-26T11:11:02.072Z",
                __v: 0
            },
            {
                type: "professional",
                id: 2,
                name: "Mike",
                email: "bas@gmail.com",
                phone: "070111111",
                user: "5e561f8345f0b5558c9df4df",
                date: "2020-02-26T11:09:04.863Z",
                __v: 0
            }
        ],
        current:null,
        filtered:null
    }

    const [state, dispatch] = useReducer(ContactReducer, initialState)

    // add contact

    const addContact = contact =>{
        contact.id = v4();
        dispatch({
            type:ADD_CONTACT,
            payload: contact
        })
    } 

    // delete contact
    const deleteContact = id => {
        dispatch({
            type:DELETE_CONTACT,
            payload:id
        })
    }
    // set current contact
    const setCurrent = contact => {
        dispatch({
            type:SET_CURRENT,
            payload:contact
        })
    }
    // clear current contact
    const clearCurrent = () => {
        dispatch({
            type:CLEAR_CURRENT
        })
    }
    // update contact
    const updateContact = contact => {
        dispatch({
            type:UPDATE_CONTACT,
            payload:contact
        })
    }
    // filter contact
    const filterContacts = text => {
        dispatch({
            type:FILTER_CONTACTS,
            payload:text
        })
    }
    //  clear filter
    const clearFilter = () => {
        dispatch({
            type:CLEAR_FILTER
        })
    }
    return (
        <ContactContext.Provider
        value={{
            contacts:state.contacts,
            current:state.current,
            filtered:state.filtered,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact,
            filterContacts,
            clearFilter
        }}
        >
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState;