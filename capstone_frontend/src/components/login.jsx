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


import axios from 'axios';



const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [currentUser, setCurrentUser] = useState({})
    const [toggleError, setToggleError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    //const [loggedUser, setLoggedUser] = useState({email, password})

    const handleSubmit = () => {
        let loggedUser = { 
            email: email,
            password: password
        };
        console.log(loggedUser)
        props.handleLogin(loggedUser)
    }


    return (
        <div>
            <h2>Log In</h2>
            <br/><br/>
            <input type="text" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br/><br/>
            <input type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br /><br/>
            <button onClick={(e) => handleSubmit()}>Log In</button>
            
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