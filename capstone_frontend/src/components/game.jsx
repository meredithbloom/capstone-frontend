import '../styles/game.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const Game = () => {
    let params = useParams()
    const [gameId, setGameId] = useState(params.gameId)
    const [game, setGame] = useState({})
    const API_KEY = "5a0fda4695714f4fbe032f2e92aca709"
    const BASE_URL = 'https://api.rawg.io/api'
    
      const getGame = () => {
        axios({
          url: '/games/' + gameId,
          method: 'get',
          baseURL: BASE_URL,
          params: {
            key: API_KEY
          }
        }).then((response) => {
            console.log(response.data)
            setGame(response.data)
        })
      }
    
    
      useEffect(() => {
        getGame()
      }, [])

    return(
       <>
           <h1>{game.name}</h1>
       </> 
    )
}
export default Game;