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

    const handleSubmit = () => {
        let loggedUser = { 
            username: username,
            password: password
        };
        console.log(loggedUser)
        props.handleLogin(loggedUser)
    }


    return (
        <div>
            <div className="logindiv">
            <h2>Log In</h2>
            <br/><br/>
<<<<<<< HEAD
            <input className="inputs" type="text" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
=======
            <input type="text" name="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
>>>>>>> 606908ca96b8d2ef5a7239c0351f972060851f43
            <br/><br/>
            <input className="inputs" type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br /><br/>
            <button className="btn" onClick={(e) => handleSubmit()}>Log In</button>
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