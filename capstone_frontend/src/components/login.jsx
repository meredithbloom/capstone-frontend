import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Link,
  Outlet,
  NavLink
} from 'react-router-dom';
import '../styles/login.css'

import axios from 'axios';



const Login = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [currentUser, setCurrentUser] = useState({})
    const [toggleError, setToggleError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    //const [loggedUser, setLoggedUser] = useState({email, password})

    const handleSubmit = (e) => {
        e.preventDefault()
        let loggedUser = { 
            username: username,
            password: password
        };
        //console.log(loggedUser)
        props.handleLogin(loggedUser)
    }

    let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content'); 

    return (
        <div>
            <div className="logindiv">
                <h2>Log In</h2>
                <br /><br />
                <form onSubmit={handleSubmit}>
                    <input className="inputs" type="text" name="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <br/><br/>
                    <input className="inputs" type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br /><br />
                    <input type="hidden" name="_token" value={token}/>
                    <input className="btn" type='submit' value='login'/>
                </form>
                <br/>
                <Link to='/register'>
                    <button className='btn'>Need an account?</button>
                </Link>
            </div>
            
            {toggleError ? (
                <p>
                    {errorMessage}
                </p>
            ) : (
                null
            )};
            <br/>
        </div>
    )



}

export default Login;