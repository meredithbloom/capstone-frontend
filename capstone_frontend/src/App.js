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
//import Home from './components/home'
import Game from './components/game'
//import Profile from './components/profile'
import axios from 'axios'

const App = () => {

  const API_KEY = "5a0fda4695714f4fbe032f2e92aca709"
  const BASE_URL = 'https://api.rawg.io/api'
  const [toggleLogin, setToggleLogin] = useState(true)
  const [toggleError, setToggleError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [toggleLogout, setToggleLogout] = useState(false)
  const [games, setGames] = useState([])
  const [showGame, setShowGame] = useState(null)
  const [gameID, setGameID] = useState(null)
  


  // GET
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


  const getGame = (gameID) => {
    axios({
      url: '/games/' + gameID,
      method: 'get',
      baseURL: BASE_URL,
      params: {
        key: API_KEY
      }
    }).then((response) => {
      console.log(response.data)
      //setGameID(response.data.id)
    })
  }


  useEffect(() => {
    getGames()
    //getGame()
  }, [])


  return (
    <>
        <Sidebar />
        <h1>appname</h1>
  
        {games.map((game) => {
          return (
            <>
              <br/><br/><br/><br/>
              {/* <button onClick={() => setGameID(game.id)} key={game.id}>
                {game.name}
              </button> */}
              <NavLink to={`/games/${game.id}`} key={game.id}>
                {game.name}
              </NavLink>
            </>
          )
        })}
      <Outlet/>
    </>
  )
}
export default App