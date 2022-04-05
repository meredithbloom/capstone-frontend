import {useState, useEffect} from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route, Link, Outlet, NavLink } from 'react-router-dom'
import Sidebar from './sidebar'
import '../styles/review.css'
import Review from './review'
import { AiFillStar } from 'react-icons/ai'

const Reviews = (props) => {
    const [reviews, setReviews] = useState(props.reviews)
    const API_KEY = "5a0fda4695714f4fbe032f2e92aca709"
    const BASE_URL = 'https://api.rawg.io/api'
    const BEARER_TOKEN = props.currentUser.token
    const [reviewID, setReviewID] = useState(null)



    useEffect(() => {
        props.getReviews();
    }, [])

    



    return (
        <>
            <h5>Recent Reviews</h5>
            {props.reviews ? (
                <>
                    <div className='reviews-grid'>
                    {props.reviews.map((review) => {
                        return (
                            <div className='review-card' id={review.id}>
                                <h2 onClick={() => {
                                    setReviewID(review.id)
                                }}>
                                    <Link className='review-title' to={`${review.id}`}>
                                        {review.game}
                                    </Link>
                                </h2>
                                <Link to={`games/${review.game_id}`}>
                                    <div>
                                        <img src={review.game_cover}/>
                                    </div>
                                </Link>
                                
                                <h2 className='review-author'>
                                    {review.title}<br />
                                    {review.rating} <AiFillStar /><br/>
                                    by: {review.author_username}
                                </h2>
                                <p className='review-body'>
                                    {review.body}
                                </p>
                                <br/>
                            </div>
                        )
                    })}
                    </div>
                </>
            ) : (
                null
            )}
         
        </>
        
    )




}


export default Reviews