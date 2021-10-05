import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlayerCard from '../../playerCard/PlayerCard.jsx'
import "./Equipe.css"

function Equipe() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:8000/api/players')
        .then((res) => res.data)
        .then((data) => setPlayers(data))
    }, [])


    return (
        <div className="Team">

            {players.map((player) => (
                <div key={player.id} className="team">
                    <PlayerCard player={player}/>
                </div>
            ))}
        </div>
    )
}

export default Equipe
