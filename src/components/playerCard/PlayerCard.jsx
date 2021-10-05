import React from 'react'
import { Link } from 'react-router-dom'
import "./PlayerCard.css"

function PlayerCard({player}) {
    return (
        <div className="containerPlayerCard">
            <Link to={{ pathname:`player/${player.id}`}}>
                <div className="playerCard">
                    <img className="photo" alt={player.firstname} src={require(`../../assets/${player.picture_player}`).default}/>
                </div>
            </Link>
        </div>
    )
}

export default PlayerCard
