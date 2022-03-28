import '../styles/game.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'



const Game = (props) => {
  const API_KEY = "5a0fda4695714f4fbe032f2e92aca709"
  const BASE_URL = 'https://api.rawg.io/api'
  let params = useParams();
  const [gameID, setGameID] = useState(parseInt(params.gameId, 10));
  const [game, setGame] = useState(null)
  const [platform, setPlatform] = useState(null)

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
      setPlatform(response.data.platforms[0].name)
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
        <>
        <div className="gamediv">
          <h5>{game.name}</h5>
          <img src={game.background_image}/>
        <div className="gameinfo">
          <ul>
            <li>{[game.rating]}<AiFillStar /></li>
            <li>{[game.genres[0].name]}, {[game.genres[1].name]}</li>
            <li>developer: {[game.developers[0].name]}</li>
            <li>ESRB rating: {[game.esrb_rating.name]}</li>
            <li>release date: {[game.released]}</li>
            <li>playtime: {[game.playtime]} hours</li>
            </ul>
            </div>
            <div className="desc">{[game.description_raw]}</div>
          <div className="infobox">
            platforms:
            <ul>
              {game.platforms.map((platform) => {
                return (
                  <li>{platform.platform.name}</li> 
                )
              })}
            </ul>
          </div>
          <div className="infobox">
            tags:
              <ul>
                {game.tags.map((tag) => {
                  return (
                   <li>{tag.name}</li> 
                  )
                })}
              </ul>
          </div>
        </div>
    </>
    ) : (
      null
    )}
  </>
  )
}


export default Game