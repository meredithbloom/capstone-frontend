import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/profile.css'
import { BrowserRouter, Routes, Route, Link, Outlet, NavLink, useNavigate, useParams } from 'react-router-dom'
import Sidebar from './sidebar'



const Profile = (props) => {
    const [currentUser, setCurrentUser] = useState(props.currentUser)





    return (
        <>
            <h2>Welcome, {currentUser.user.username}!</h2>
        </>
    )


















}