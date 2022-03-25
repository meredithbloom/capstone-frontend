import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route, Link, Outlet, NavLink } from 'react-router-dom'
import Sidebar from './sidebar'


const Discover = (props) => {
    const API_KEY = "5a0fda4695714f4fbe032f2e92aca709"
    const BASE_URL = 'https://api.rawg.io/api'

    const [games, setGames] = useState({})
    const [toggleGames, setToggleGames] = useState(false)
    const [gameID, setGameID] = useState(null)

    const getGames = () => {
         axios({
            url: '/games',
            method: 'get',
            baseURL: BASE_URL,
            params: {
                key: API_KEY,
                page_size: 5,
            }
        }).then((response) => {
            setGames(response.data.results)
            setToggleGames(true)
            console.log(games)
        }).catch((error) => {
            console.error(error)
        })
    }
    

    useEffect(() => {
        getGames()
    }, [])


    return (
        <>
            {toggleGames ? (
                <>
                    {games.map((game) => {
                        return (
                            <div key={game.id}>
                                <Link to={`${game.id}`}>
                                    <div
                                        onClick={() => { setGameID(game.id) }}>
                                        {game.name}
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </>
            ) : (
                    null
                )
            }
        
        
        </>
    )



}

export default Discover