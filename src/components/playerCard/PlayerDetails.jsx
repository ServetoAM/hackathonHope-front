import React, { useEffect, useState } from 'react';
import './PlayerDetails.css';
import axios from 'axios';

function PlayerDetails(props) {
    const [playerDetails, setPlayerDetails] = useState("");
    const playerId = props.match.params.id

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/players/${playerId}`)
        .then((res) => res.data)
        .then((data) => setPlayerDetails(data))
    }, [])

console.log(playerDetails)

    return (
        <div className="Main">
           <div className="panel">
                <div className="left-panel">
                <img className="joueur" alt={playerDetails.firstname} src={process.env.PUBLIC_URL + "/assets/" + playerDetails.picture_player}/>
                </div>
                <div className="right-panel">
                    <p className="citation">"{playerDetails.quotes}"</p>
                        <div className="name">
                            <p>{playerDetails.firstname}</p>
                            <p>{playerDetails.lastname} </p>
                        </div>
                    <div className="main-info-container"> 
                        <div className="container-1">
                            <p>{playerDetails.occupation}</p>
                            <p>{playerDetails.age}</p>
                            <p>{playerDetails.qualities}</p>
                        </div>
                        <div className="empty">
                        </div>
                        <div className="container-2">
                            <p>{playerDetails.palmares}</p>
                            <p>{playerDetails.description_player}</p>
                        </div>
                    </div>
                    <div className="second-info">
                        <p>{playerDetails.other_games}</p>
                        <p>{playerDetails.discord}</p>
                        <p>{playerDetails.twitter}{playerDetails.facebook}{playerDetails.instagram}{playerDetails.tiktok}{playerDetails.twitch}</p>
                    </div>
                </div>
            </div>
           
           <div className="panel">
                <div className="left-panel">
                    
                </div>
            </div>    
        </div>
    )
}

export default PlayerDetails
