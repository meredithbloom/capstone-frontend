import React from "react";
import '../styles/minigame.css'
import {useState} from 'react'

const Minigame = (props) => {

    const [game1, setGame1] = useState(false)
    const [game2, setGame2] = useState(false)
    const [game3, setGame3] = useState(false)
    const [game4, setGame4] = useState(false)

    const toggleGame1 = (event) => {
        if (!game1) {
            setGame1(true)
        } else {
            setGame1(false)
        }
    }

    const toggleGame2 = (event) => {
        if (!game2) {
            setGame2(true)
        } else {
            setGame2(false)
        }
    }

    const toggleGame3 = (event) => {
        if (!game3) {
            setGame3(true)
        } else {
            setGame3(false)
        }
    }

    const toggleGame4 = (event) => {
        if (!game4) {
            setGame4(true)
        } else {
            setGame4(false)
        }
    }


    return (
        <>
            <div className="minigames">
                <button className='btn' onClick={toggleGame1}>Select Game 1</button>
                {game1 ? (
                    <div className="minigame">
                    <iframe width="800" height="500" allow="fullscreen; autoplay; encrypted-media" src="https://games.construct.net/6059/latest" frameborder="0" allowfullscreen="true" msallowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" allowpaymentrequest="false" referrerpolicy="unsafe-url" sandbox="allow-same-origin allow-forms allow-scripts allow-pointer-lock allow-orientation-lock allow-popups" scrolling="no"></iframe>
                    </div>                    
                ) : (
                    null  
                )}
                <br/><br/>
                <button className='btn' onClick={toggleGame2}>Select Game 2</button>
                {game2 ? (
                    <div className="minigame">
                        <iframe width="800" height="500" allow="fullscreen; autoplay; encrypted-media" src="https://games.construct.net/1142/latest" frameborder="0" allowfullscreen="true" msallowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" allowpaymentrequest="false" referrerpolicy="unsafe-url" sandbox="allow-same-origin allow-forms allow-scripts allow-pointer-lock allow-orientation-lock allow-popups" scrolling="no"></iframe>
                    </div>   
                ) : (
                    null
                )}
                <br/><br/>
                <button className='btn' onClick={toggleGame3}>Select Game 3</button>
                {game3 ? (
                    <div className="minigame">
                        <iframe width="800" height="500" allow="fullscreen; autoplay; encrypted-media" src="https://games.construct.net/1843/latest" frameborder="0" allowfullscreen="true" msallowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" allowpaymentrequest="false" referrerpolicy="unsafe-url" sandbox="allow-same-origin allow-forms allow-scripts allow-pointer-lock allow-orientation-lock allow-popups" scrolling="no"></iframe>
                    </div> 
                ) : (
                    null
                )}
                <br/><br/>
                <button className='btn' onClick={toggleGame4}>Select Game 4</button>
                {game4 ? (
                    <div className="minigame">
                        <iframe width="800" height="500" allow="fullscreen; autoplay; encrypted-media" src="https://games.construct.net/11660/latest" frameborder="0" allowfullscreen="true" msallowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" allowpaymentrequest="false" referrerpolicy="unsafe-url" sandbox="allow-same-origin allow-forms allow-scripts allow-pointer-lock allow-orientation-lock allow-popups" scrolling="no"></iframe>
                    </div>
                ) : (
                    null
                )}
            </div>
        </>


    )
}
export default Minigame;