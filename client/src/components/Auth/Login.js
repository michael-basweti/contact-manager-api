import React,{useState, useContext} from 'react'
import AuthContext from '../../context/auth/AuthContext'

const Login = () => {
    const authContext = useContext(AuthContext)
    const [user, setUser] = useState({
        email:'',
        password:'',
    })

    const {email, password} = user

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log('Login Submit');
        
    }

    const onChange = e => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" value={email} onChange={onChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} onChange={onChange}/>
            </div>
            <input type="submit" value="Login" className="btn btn-primary btn-block"/>
            </form>
        </div>
    )
}

export default Login
