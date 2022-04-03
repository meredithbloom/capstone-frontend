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



const Register = (props) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    const handleSubmit = () => {
        let newUser = { name, email, password };
        props.handleSignUp(newUser);
    }


    return (
        <div>
            <h1>Register</h1>
            <br/><br/>
            <input type="text" name="name" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
            <br /><br/>
            <input type="text" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br /><br />
            <input type="text" name="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br /><br />
            <input type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br /><br/>
            <button onClick={handleSubmit}>Sign Up</button>
            <br/>
        </div>
    )



}

export default Register;