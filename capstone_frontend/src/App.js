import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom';

import './styles/sidebar.css' 
import Sidebar from './components/sidebar'
import Home from './components/home'
import Game from './components/game'
import Profile from './components/profile'

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <h1>appname</h1>
      <Routes>
        <Route exact path="/game" element={<Game />}/>
        <Route exact path="/profile" element={<Profile />}/>
      </Routes>
    </BrowserRouter> 
  )
}
export default App