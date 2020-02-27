import React, {useReducer} from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext'
import ContactReducer from './contactReducer'
import {ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER} from '../types'
import contactContext from './contactContext'

const ContactState = props => {
    const initialState = {
        contacts:[
            {
                type: "personal",
                _id: 1,
                name: "Ted",
                email: "ted@gmail.com",
                phone: "07011189318",
                user: "5e561f8345f0b5558c9df4df",
                date: "2020-02-26T11:11:02.072Z",
                __v: 0
            },
            {
                type: "personal",
                _id: 2,
                name: "Mike",
                email: "bas@gmail.com",
                phone: "070111111",
                user: "5e561f8345f0b5558c9df4df",
                date: "2020-02-26T11:09:04.863Z",
                __v: 0
            }
        ]
    }

    const [state, dispatch] = useReducer(ContactReducer, initialState)

    // add contact

    // delete contact

    // set current contact

    // clear current contact

    // update contact

    // filter contact

    //  clear filter

    return (
        <contactContext.Provider
        value={{
            contacts:state.contacts
        }}
        >
            {props.children}
        </contactContext.Provider>
    )
}

export default ContactState;