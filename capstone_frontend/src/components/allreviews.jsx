import {useState, useEffect} from 'react'



const Reviews = (props) => {
    //const [reviews, setReviews] = useState(props.reviews)


    useEffect(() => {
        props.getReviews();
    }, [])



    return (
        <>
            {props.reviews ? (
                <>
                    {props.reviews.map((review) => {
                        return (
                            <>
                                <h2>
                                    {review.title}
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