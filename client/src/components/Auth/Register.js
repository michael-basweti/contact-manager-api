import React,{useState, useContext, useEffect} from 'react'
import AuthContext from '../../context/auth/AuthContext'
import AlertContext from '../../context/alert/AlertContext'

const Register = (props) => {
    const authContext = useContext(AuthContext)
    const alertContext = useContext(AlertContext)

    const { register, error, clearErrors, isAuthenticated} = authContext
    const {setAlert} = alertContext

    useEffect(()=>{
        if(isAuthenticated){
            props.history.push('/')
        }
        if(error === 'User already exists'){
            setAlert(error, 'danger')
            clearErrors()
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history])
    const [user, setUser] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })

    const {name, email, password, password2} = user

    const onSubmit = (e) =>{
        e.preventDefault();
        if(name===''|| email===''||password===''){
            setAlert('Please enter all fields', "danger")
        }else if(password!==password2){
            setAlert('Passwords do not match', 'danger')
        }
        else{
            register({
                name, email, password
            })
        }
       
        
    }

    const onChange = e => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Register</span>
            </h1>
            <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={name} onChange={onChange} required/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" value={email} onChange={onChange} required/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" minLength="6" name="password" value={password} onChange={onChange} required/>
            </div>
            <div className="form-group">
                <label htmlFor="password2">Password Confirm</label>
                <input type="password" minLength="6" name="password2" value={password2} onChange={onChange} required/>
            </div>
            <input type="submit" value="Register" className="btn btn-primary btn-block"/>
            </form>
        </div>
    )
}

export default Register
