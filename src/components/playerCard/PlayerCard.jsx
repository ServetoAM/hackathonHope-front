import React from 'react'
import "./PlayerCard.css"

function PlayerCard({player}) {
    return (
        <div className="containerPlayerCard">
            <div className="playerCard">
                <img className="photo" alt={player.firstname} src={require(`../../assets/${player.picture_player}.png`).default}/>
                <img className="pseudo" alt={player.player_name} src={process.env.PUBLIC_URL +  player.player_name}/>
            </div>
        </div>
    )
}

export default PlayerCard
