import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route, Link, Outlet, NavLink } from 'react-router-dom'
import Sidebar from './sidebar'
import '../styles/discover.css'

const Discover = (props) => {
    const API_KEY = "5a0fda4695714f4fbe032f2e92aca709"
    const BASE_URL = 'https://api.rawg.io/api'

    const [games, setGames] = useState({})
    const [toggleGames, setToggleGames] = useState(false)
    const [gameID, setGameID] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [errorMessage, setErrorMessage] = useState("")
    const [toggleError, setToggleError] = useState(false)

    const getGames = (currentPage) => {
         axios({
            url: '/games',
            method: 'get',
            baseURL: BASE_URL,
            params: {
                key: API_KEY,
                page_size: 10,
                page: currentPage
            }
        }).then((response) => {
            setGames(response.data.results)
            setToggleGames(true)
            console.log(games)
        }).catch((error) => {
            console.error(error)
        })
    }
    

    const prevPage = (e) => {
        if (currentPage > 1) {
            setCurrentPage((currentPage) => currentPage - 1)
            getGames(currentPage)
        } else {
            setToggleError(true)
            setErrorMessage("Sorry, no previous page.")
        }
    }

    const nextPage = (e) => {
        setCurrentPage((currentPage) => currentPage + 1)
        getGames(currentPage)
    }

    useEffect(() => {
        getGames()
    }, [])


    return (
        <>
            {toggleGames ? (
                <>
                <div className="discgrid">
                    {games.map((game) => {
                        return (
                            <div key={game.id}>
                                
                                <Link to={`${game.id}`}>
                                    <div
                                        onClick={() => { setGameID(game.id) }}>
                                        <img src={game.background_image}/>
                                        
                                    </div>
                                </Link>
                                <h5>{game.name}</h5>
                                </div>
                            
                        )
                    })}
                    </div>
                    <button onClick={ () => {
                        prevPage()
                    }}>Back</button>
                    <button onClick={() => {
                        nextPage()
                    }}>Next</button>
                </>
            ) : (
                    null
                )
            }
        
        
        </>
    )



}

export default Discover