import {useState, useEffect} from 'react'
//import axios from 'axios'
import { Link } from 'react-router-dom'
//import Sidebar from './sidebar'
import '../styles/review.css'
//import Review from './review'

const Reviews = (props) => {
    //const [reviews, setReviews] = useState(props.reviews)
    //const API_KEY = "5a0fda4695714f4fbe032f2e92aca709"
    //const BASE_URL = 'https://api.rawg.io/api'
    //const BEARER_TOKEN = props.currentUser.token
    const [reviewID, setReviewID] = useState(null)
    console.log(reviewID)


    useEffect(() => {
        props.getReviews();
    }, [])

    



    return (
        <>
            <h5>Recent Reviews</h5>
            {props.reviews ? (
                <>
                    {props.reviews.map((review) => {
                        return (
                            <div id={review.id}>
                                <h2 onClick={() => {
                                    setReviewID(review.id)
                                }}>
                                    <Link to={`${review.id}`}>
                                        {review.game}
                                    </Link>
                                </h2>
                                <Link to={`games/${review.game_id}`}>
                                    <div>
                                        <img src={review.game_cover} alt='review cover'/>
                                    </div>
                                </Link>
                                
                                <h2>
                                    {review.title}<br/>
                                    by: {review.author_username}
                                </h2>
                                <p>
                                    {review.body}
                                </p>
                            </div>
                        )
                    })}
                </>
            ) : (
                null
            )}
         
        </>
        
    )




}


export default Reviews