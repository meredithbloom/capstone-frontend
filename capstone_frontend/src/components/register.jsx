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
    const [confirmedPassword, setConfirmedPassword] = useState("")
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault()
        let newUser = {
            name: name,
            email: email,
            password: password,
            username: username,
            confirmed_password: confirmedPassword
        };
        props.handleSignUp(newUser);
    }

    let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content'); 
    
    return (
        <div className='registerDiv'>
           

            <h2>Register</h2>
            <br /><br />
            <form onSubmit={handleSubmit}>
                <input className='inputs' type="text" name="name" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                <br /><br/>
                <input className='inputs' type="text" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br /><br />
                <input className='inputs' type="text" name="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <br /><br />
                <input className='inputs' type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br /><br />
                <input className='inputs' type="password" name="password_confirmation" placeholder="confirm password" value={confirmedPassword} onChange={(e) => setConfirmedPassword(e.target.value)} />
                <br /><br />
                <input type="hidden" name="_token" value={token}/>
                <button className='btn' type='submit'>Sign Up</button>
                <br/>
            </form><br/>
             <Link to="/login">
                <button className="btn">Already have an account?</button>
            </Link>
        </div>
    )



}

export default Register;