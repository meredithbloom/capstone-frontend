import {useState, useEffect} from 'react'
import axios from 'axios'


const Reviews = (props) => {
    const [reviews, setReviews] = useState(props.reviews)
    const API_KEY = "5a0fda4695714f4fbe032f2e92aca709"
    const BASE_URL = 'https://api.rawg.io/api'
    const BEARER_TOKEN = props.currentUser.token
    const imageArray = []


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
                            <>
                                <h2>{review.game}</h2>
                                <img src={review.game_cover} />
                                <h2>
                                    {review.title}<br/>
                                    by: {review.author_username}
                                </h2>
                                <p>
                                    {review.body}
                                </p>
                            </>
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