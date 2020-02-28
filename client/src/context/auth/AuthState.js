import React, {useReducer} from 'react'
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'
import {REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, USER_LOADED, AUTH_ERROR, CLEAR_ERRORS} from '../types'

const AuthState = props => {
    const initialState = {
        token:localStorage.getItem('token'),
        isAuthenticated: null,
        loading:true,
        error:null,
        user:null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    
    return (
        <AuthContext.Provider
        value={{
            token:state.token,
            isAuthenticated:state.isAuthenticated,
            loading:state.loading,
            error:state.error,
            user:state.user
        }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;