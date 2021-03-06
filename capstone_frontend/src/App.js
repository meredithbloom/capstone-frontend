import React, { useState, useEffect} from 'react'
import {
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';


import Sidebar from './components/sidebar'
import Game from './components/game'
import Home from './components/home'
import Discover from './components/discover'
import MiniGames from './components/minigame'
//import Profile from './components/profile'
import Register from './components/register';
import Login from './components/login';
import axios from 'axios'
import Reviews from './components/allreviews';
import Review from './components/review'

const App = () => {

  //let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
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
  //const [userDetails, setUserDetails] = useState(null)
  const [reviews, setReviews] = useState()
  let navigate = useNavigate()
  //const [gameID, setGameID] = useState(null)
  console.log(toggleLogin)
  console.log(toggleLogout)

  //POST - CREATE USER
  const handleSignUp = (newUser) => {
    //console.log(newUser)
    axios.get('http://localhost:8000/sanctum/csrf-cookie')
      .then((response) => {
        axios({
          url: 'http://localhost:8000/api/register',
          method: 'post',
          headers:  {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-Requested-With": "XMLHttpRequest"
          },
          data: newUser
        })
        .then(
          (response) => {
            console.log(response.data);
            navigate('/login')
          }, (error) => {
            console.error(error);
          })
      })
  }

  //POST - LOGIN USER
  const handleLogin = (loggedUser) => {
    //axios.defaults.withCredentials = true
    axios.get('https://play3d-backend.herokuapp.com/sanctum/csrf-cookie')
      .then((response) => {
        axios({
          url: 'https://play3d-backend.herokuapp.com/api/login',
          method: 'post',
          headers:  {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-Requested-With": "XMLHttpRequest"
          },
          data: loggedUser
        })
        .then(
          (response) => {
            if (response.data.token) {
              setIsAuthenticated(true)
              setCurrentUser(response.data)
              setToggleError(false)
              setToggleLogin(false)
              setToggleLogout(true)
              navigate('/')
            } else {
              setToggleError(true)
              setErrorMessage(response.data)
            }
          }, (error) => {
            console.error(error);
          })
      })
  }

  
  //GET REVIEWS (INDEX)
  const getReviews = () => {
    axios({
      url: 'https://play3d-backend.herokuapp.com/api/reviews',
      method: 'get'
    }).then((response) => {
      if (response.data[0].id) {
        //console.log(response.data)
        setReviews(response.data)
        //console.log(reviews)
      } else {
        console.log(response.data)
      }
    })
  }

  const getUser = () => {
    let token = currentUser.token
    axios({
      url: '/users/' + currentUser.user.id,
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Accept':'application/json'
      }
    }).then((response) => {
      console.log(response)
      //console.log(response.data)
      //setGameID(response.data.id)

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
        page_size: 15
       }
    }).then((response) => {
      setGames(response.data.results)
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
    getReviews()
  },[getGames, getReviews])


  return (
    <>
      <div className="nav">
        <Sidebar/>
       <h1 className="logo">PLAY3D</h1>
      </div>
      <Routes>
        <Route index element={<Home
          currentUser={currentUser}
          isAuthenticated={isAuthenticated}
          getUser={getUser}
        />} />
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
            isAuthenticated={isAuthenticated}
            currentUser={currentUser}
          />}/>
        <Route path="games/:gameId"
          element={<Game
            handleGameDetails={handleGameDetails}
            isAuthenticated={isAuthenticated}
            currentUser={currentUser}
            //showGame={showGame}
            //gameID={gameID}
          />}
        />
        <Route path="reviews" element={<Reviews
          getReviews={getReviews}
          reviews={reviews}
          isAuthenticated={isAuthenticated}
          currentUser={currentUser}
          getGames={getGames}
          handleGameDetails={handleGameDetails}
        />} />
        <Route path="reviews/:reviewID" element={<Review
          getReviews={getReviews}
          reviews={reviews}
          isAuthenticated={isAuthenticated}
          currentUser={currentUser}
          getGames={getGames}
          handleGameDetails={handleGameDetails}
        />} />
        <Route path="play" element={<MiniGames />}/>
      </Routes>
    </>
  )
}
export default App