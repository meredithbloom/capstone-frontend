import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route, Link, Outlet, NavLink } from 'react-router-dom'
import Sidebar from './sidebar'


const Home = (props) => {


    const triggerLogout = (event) => {
        event.preventDefault()
        props.handleLogout(props.currentUser)
    }

    const handleDelete = (event) => {
        event.preventDefault();
        props.handleDeleteAccount(props.currentUser)
    }

    return (
        <>
            {props.isAuthenticated ? (
                <>
                    <h5>Welcome back, {props.currentUser.user.username}!</h5>
                    <button className='btn' onClick={triggerLogout}>Logout</button>
                    <br/>
                    <button className='btn' onClick={handleDelete}>Delete Account</button>
                </>
            ) : (
                <h5>Welcome!</h5>
            )}
            
        </>
   )



}

export default Home