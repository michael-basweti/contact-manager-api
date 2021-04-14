import React,{Fragment, useContext} from 'react'
import '../../App.css'
import AuthContext from '../../context/auth/AuthContext'
import ContactContext from '../../context/contact/contactContext'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Navbar = ({title, icon}) => {
    const contactContext = useContext(ContactContext)
    const authContext = useContext(AuthContext)
    const { isAuthenticated, logout, user} = authContext
    const {clearContacts} = contactContext

    const onLogout = () =>{
        logout()
        clearContacts()
    }
    const authLinks = (
        <Fragment>
            <li>Hello {user && user.name}</li>
            <li>
                <a onClick={onLogout} href="#!">
                    <i className="fas fa-sign-out-alt"></i> <span className="hide-sm">Logout</span>
                </a>
            </li>
        </Fragment>
    )
    const guestLinks = (
        <Fragment>
           <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
        </Fragment>
    )
    return (
        <div className="navbar bg-primary">
            <h1>
                <i className={icon}></i> {title}
            </h1>
            <ul>
                
                {isAuthenticated ? authLinks:guestLinks}
                
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt'
}
export default Navbar