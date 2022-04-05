import {useState, useEffect} from 'react'
import axios from 'axios'
//import { BrowserRouter, Routes, Route, Link, Outlet, NavLink } from 'react-router-dom'
//import Sidebar from './sidebar'
import { useParams, useNavigate } from 'react-router-dom'
import '../styles/review.css'
//import { AiOutlineRadiusSetting } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'




const Review = (props) => {
    const params = useParams();
    const BEARER_TOKEN = props.currentUser.token;
    //const [currentUser, setCurrentUser] = useState(props.currentUser)
    //const [isAuthenticated, setIsAuthenticated] = useState(props.isAuthenticated)
    
    const [reviewId, setReviewId] = useState(parseInt(params.reviewID, 10))
    const [review, setReview] = useState(null)
    //const [username, setUsername] = useState(props.currentUser.user.username)
    
    
    const navigate = useNavigate();
    
    let isAuthor = false;    
    if (props.currentUser.user && review) {
        isAuthor = props.currentUser.user.username === review.author_username;
    }


    const getReview = (reviewId) => {
        axios
            .get(`https://play3d-backend.herokuapp.com/api/reviews/${reviewId}`)
            .then((response) => {
                console.log(response.data)
                setReview(response.data)
                setReviewId(response.data.id)
            })
    }


    const handleDelete = (event) => {
        event.preventDefault();
        axios
            .delete(`https://play3d-backend.herokuapp.com/api/reviews/${reviewId}`, {
                headers: {
                    "Auhorization": "Bearer " + BEARER_TOKEN,
                    "Accept": "application/json",
                }
            })
            .then((response) => {
                console.log(response)
                navigate("/reviews")
            })
            .catch((err) => console.log(err));
    };



    useEffect(() => {
        getReview(reviewId)
    }, [reviewId])


    if (!review) {
        return <p>reticulating splines....</p>
    } else {
        return (
            <>
                <h5>{review.game}</h5>
                <img src={review.game_cover} alt='game cover' />
                <h2>{review.title}</h2>
                <h2>author: <br/>{review.author_username}</h2>
                <p>{review.body}</p>
                <br />
                <p>rating: <br/>{review.rating} <AiFillStar /></p>
                <br/><br/>
                {isAuthor && (
                    <>
                        <button className='btn'>Edit Review</button>
                        <br/><br/>
                        <button className='btn' onClick={handleDelete}>
                            Delete Review
                        </button>
                    </>
                )}        
            </>
        )
    }

}

export default Review;