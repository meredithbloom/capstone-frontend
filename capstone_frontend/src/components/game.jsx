import '../styles/game.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'



const Game = (props) => {
  const API_KEY = "5a0fda4695714f4fbe032f2e92aca709"
  const BASE_URL = 'https://api.rawg.io/api'
  let params = useParams();
  const [gameID, setGameID] = useState(parseInt(params.gameId, 10));
  const [game, setGame] = useState(null)



  const getGame = (gameID) => {
    axios({
      url: '/games/' + gameID,
      method: 'get',
      baseURL: BASE_URL,
      params: {
        key: API_KEY
      }
    }).then((response) => {
      setGame(response.data)
      console.log(response.data)
      //setGameID(response.data.id)

    })
  }


  useEffect(() => {
    getGame(gameID)
  }, [])

  return (
    <>
      {game ? (
        <h5>{game.name}</h5>
      ) : (
          null
      )}
      
    </>
  )


}


export default Game