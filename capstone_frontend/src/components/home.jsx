import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route, Link, Outlet, NavLink } from 'react-router-dom'
import Sidebar from './sidebar'


const Home = (props) => {
    return (
        <>
            {props.isAuthenticated ? (
                <h5>Welcome back, {props.currentUser.user.username}!</h5>
            ) : (
                <h5>Welcome!</h5>
            )}
            
        </>
   )



}

export default Home