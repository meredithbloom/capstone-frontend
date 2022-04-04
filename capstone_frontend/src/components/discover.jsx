import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route, Link, Outlet, NavLink } from 'react-router-dom'
import Sidebar from './sidebar'
import '../styles/discover.css'
import ReactPaginate from 'react-paginate'
import Search from './search'

const Discover = (props) => {
    const API_KEY = "5a0fda4695714f4fbe032f2e92aca709"
    const BASE_URL = 'https://api.rawg.io/api'

    const [games, setGames] = useState({})
    const [toggleGames, setToggleGames] = useState(false)
    const [gameID, setGameID] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [errorMessage, setErrorMessage] = useState("")
    const [toggleError, setToggleError] = useState(false)
    const [items, setItems] = useState([])
    const [searchString, setSearchString] = useState('')
    const [search, setSearch] = useState([])
    
    //let currentPage = 1;


    const getGames = (currentPage) => {
         axios({
            url: '/games',
            method: 'get',
            baseURL: BASE_URL,
            params: {
                key: API_KEY,
                page_size: 20,
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
    

    const handleSearch = (event) => {
        event.preventDefault();
        axios({
            url: '/games',
            method: 'get',
            baseURL: BASE_URL,
            params: {
                key: API_KEY,
                search: searchString
            }
        }).then((response) => {
            setSearch(response.data.results)
            //setGames(response.data.results)
            console.log(search)
        }).catch((error) => {
            console.error(error)
        })
    }

    // const prevPage = (e) => {
    //     if (currentPage > 1) {
    //         setCurrentPage((currentPage) => currentPage - 1)
    //         getGames(currentPage)
    //     } else {
    //         setToggleError(true)
    //         setErrorMessage("Sorry, no previous page.")
    //     }
    // }

    // const nextPage = (e) => {
    //     setCurrentPage((currentPage) => currentPage + 1)
    //     getGames(currentPage)
    // }

    let queryGames = false;
    if (search.length > 0) {
        queryGames = true;
    } else {
        queryGames = false;
    }
    
   
    const handlePageClick = (data) => {
        console.log(data.selected)
        setCurrentPage(data.selected + 1)
        const currentPageGames = getGames(currentPage);
        setGames(currentPageGames)
    }


    useEffect(() => {
        getGames()
    }, [])


    return (
        <>
            {toggleGames ? (
                <>
                    <div className="search">
                        <form onSubmit={handleSearch}>
                            <input
                                className='inputs'
                                type='text'
                                placeholder='search...'
                                value={searchString}
                                onChange={(event) => {
                                    setSearchString(event.target.value)
                                }}
                            /><br/>
                            <input type='submit' value='search'/>
                        </form>
                        <Search search={search}/>
                    </div>
                    <div className="discgrid">
                        {games.map((game) => {
                            return (
                                <div className="gameCard" key={game.id}>
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
                </>
            ) : (
                    null
                )
            }
        
        
        </>
    )



}

export default Discover