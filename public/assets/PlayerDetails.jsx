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
        <div className="containerGlobal">

            <div className="containerCardPlayer">
                <div className="cardPlayer">
                    <img className="joueur" src={playerDetails.picture_player}/>
                    <img className="pseudonym" src={playerDetails.player_name}/>
                </div>
            </div>

            <div>
                <div className="firstPart">
                    <div>
                        <p>"{playerDetails.quotes}"</p>
                    </div>

                    <div></div>
                        <div>
                            <div className="containerName">
                                <h2>{playerDetails.firstname}</h2>
                                <h2>{playerDetails.lastname}</h2>
                            </div>
                            <div className="life">
                                <p>{playerDetails.age}</p>
                                <p>{playerDetails.occupation}</p>
                                <p>{playerDetails.qualities}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="secondPart">
                        <div>
                            <p>{playerDetails.palmares}</p>
                        </div>
                                    
                        <div>
                            <p>{playerDetails.description_player}</p>
                        </div>
                    </div>

                </div>

            <div className="thirdPart">
                <p>{playerDetails.other_games}</p>
            </div>
            <div>
                <p>{playerDetails.discord}</p>
            </div>
            {playerDetails.twitter}
            {playerDetails.facebook}
            {playerDetails.instagram}
            {playerDetails.tiktok}
            {playerDetails.twitch}
        </div>
    )
}

export default PlayerDetails
