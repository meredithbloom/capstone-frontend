import { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/review.css'
import { BrowserRouter, Routes, Route, Link, Outlet, NavLink, useNavigate, useParams } from 'react-router-dom'
import Sidebar from './sidebar'







const NewReview = (props) => {
    const params = useParams();
    let navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [game, setGame] = useState(props.game)
    const [rating, setRating] = useState("")
    
    let emptyReview = {
        title: '',
        body: '',
        rating: '',
        game: game.name,
        slug: game.name,
        game_id: game.id,
        author_id: props.currentUser.user.id,
        game_cover: game.background_image,
        author_username: props.currentUser.user.username
    }
    const [newReview, setNewReview] = useState(emptyReview)

    const handleChange = (event) => {
        setNewReview({ ...newReview, [event.target.name]: event.target.value })
    }
    

    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newReview)
        props.handleCreateReview(newReview)
        setNewReview(emptyReview)
        
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <br/>
                <h5>Leave a Review</h5>
                <h2>{game.name}</h2>
                            
                <label id="title"></label><br/>
                <input
                    className="inputs"
                    type="text"
                    name="title"
                    id="title"
                    value={newReview.title}
                    placeholder="review title"
                    onChange={handleChange}
                />
                <br /><br />

                <label id="body">Review:</label><br/>
                <textarea
                    className="inputs"
                    name="body"
                    id="body"
                    value={newReview.body}
                    onChange={handleChange} placeholder="review body">
                    
                    </textarea>
                <br /><br />

                <label id="rating">Rating:</label><br/><br/>
                <div className="rate">
                    <input
                        type="radio"
                        id="star5"
                        name="rating"
                        value={parseInt('5')}
                        onClick={handleChange}
                    />
                    <label htmlFor="star5" title="text">5 stars</label>
                    
                    <input
                        type="radio"
                        id="star4"
                        name="rating"
                        value={parseInt('4')}
                        onChange={handleChange}
                    />
                    <label htmlFor="star4" title="text">4 stars</label>
                    
                    <input
                        type="radio"
                        id="star3"
                        name="rating"
                        value={parseInt('3')}
                        onChange={handleChange}
                    />
                    <label htmlFor="star3" title="text">3 stars</label>
                    
                    <input
                        type="radio"
                        id="star2"
                        name="rating"
                        value={parseInt('2')}
                        onChange={handleChange}
                    />
                    <label htmlFor="star2" title="text">2 stars</label>
                    
                    <input
                        type="radio"
                        id="star1"
                        name="rating"
                        value={parseInt('1')}
                        onChange={handleChange}
                    />
                    <label htmlFor="star1" title="text">1 star</label>
                </div>
                                                                
                <br/><br/>
                <input className="btn" type="submit" value="submit" />
            </form>    
        </>

    )




}

export default NewReview;