//import axios from 'axios'
import { Link } from 'react-router-dom'

const Search = (props) => {


    return (
        props.search.map((game) => {
            return (
                <div>
                    <h2>{game.name}</h2>
                    <Link to={`${game.id}`}>
                        <img src={game.background_image} alt='game cover' />
                    </Link>
                </div>
            )
        })
    )
}

export default Search;