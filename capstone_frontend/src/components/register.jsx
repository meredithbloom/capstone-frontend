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
    const [password, setPassword] = useState("");
    //let newUser = { name, email, password };



    const signUp = () => {
        let newUser = { name, email, password };
        console.log(newUser);
        axios({
            method: 'post',
            url: 'http://localhost:8000/api/register',
            data: newUser
        }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.error(error);
        })
    }







    return (
        <div>
            <h1>Register</h1>
            <br/><br/>
            <input type="text" name="name" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
            <br /><br/>
            <input type="text" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br/><br/>
            <input type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br /><br/>
            <button onClick={(e) => signUp()}>Sign Up</button>
            <br/>
        </div>
    )



}

export default Register;