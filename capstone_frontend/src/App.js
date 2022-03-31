import React, { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Link,
  Outlet,
  NavLink
} from 'react-router-dom';

import './styles/sidebar.css' 
import Sidebar from './components/sidebar'
import Game from './components/game'
import Home from './components/home'
import Discover from './components/discover'
import MiniGames from './components/minigame'
//import Profile from './components/profile'
import Register from './components/register';
import Login from './components/login';
import axios from 'axios'

const App = () => {

  const API_KEY = "5a0fda4695714f4fbe032f2e92aca709"
  const BASE_URL = 'https://api.rawg.io/api'
  const [toggleLogin, setToggleLogin] = useState(true)
  const [toggleError, setToggleError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [toggleLogout, setToggleLogout] = useState(false)
  const [games, setGames] = useState([])
  const [showGame, setShowGame] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  //const [gameID, setGameID] = useState(null)


  //POST - CREATE USER
  const handleSignUp = (newUser) => {
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

  //POST - LOGIN USER
  const handleLogin = (loggedUser) => {
    console.log(loggedUser)
    axios({
      method: 'post',
      url: 'http://localhost:8000/api/login',
      data: {
        email: loggedUser.email,
        password: loggedUser.password
      }
    }).then((response) => {
      console.log(response.data);
      if (response.data.email) {
        setCurrentUser(response.data);
      } else {
        setToggleError(true);
        setErrorMessage(response.data.error);
      }
    })
  }









  // GET - general games 
  const getGames = () => {
    axios({
      url: '/games',
      method: 'get',
      baseURL: BASE_URL,
      params: {
        key: API_KEY,
        page_size: 5
       }
    }).then((response) => {
      setGames(response.data.results)
      //setShowGame(response.data.results[0].id)
      //console.log(showGame)
      console.log(games)
    }).catch((error) => {
      console.error(error)
    })
  }

  //GET - show game page
  const handleGameDetails = (gameID) => {
    axios({
      url: '/games/' + gameID,
      method: 'get',
      baseURL: BASE_URL,
      params: {
        key: API_KEY
      }
    }).then((response) => {
      setShowGame(response.data)
      //console.log(response.data)
      console.log(showGame)
      //setGameID(response.data.id)

    })
  }


  useEffect(() => {
    getGames()
    
  }, [])


  return (
    <>
      <div className="nav">
      <Sidebar/>
      <h1>appname</h1>
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="register"
          element={<Register
          handleSignUp={handleSignUp}
          />} />
        <Route path="login" element={<Login
          handleLogin={handleLogin}
          errorMessage={errorMessage}
          toggleError={toggleError}
        />} />
        <Route path="games"
          element={<Discover
            getGames={getGames}
            handleGameDetails={handleGameDetails}
          />}/>
        <Route path="games/:gameId"
          element={<Game
            handleGameDetails={handleGameDetails}
            //showGame={showGame}
            //gameID={gameID}
          />}
        />
        <Route path="play" element={<MiniGames />}/>
      </Routes>
    </>
  )
}
export default App