import axios from 'axios'
import { BrowserRouter, Routes, Route, Link, Outlet, NavLink } from 'react-router-dom'

const Search = (props) => {


    return (
        props.search.map((game) => {
            return (
                <div>
                    <h2>{game.name}</h2>
                    <Link to={`${game.id}`}>
                        <img src={game.background_image} />
                    </Link>
                </div>
            )
        })
    )


}

export default Search;