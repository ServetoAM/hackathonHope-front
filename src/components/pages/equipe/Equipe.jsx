import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlayerCard from '../../playerCard/PlayerCard.jsx'
import { FaTwitter, FaInstagram, FaTwitch } from 'react-icons/fa'
import "./Equipe.css"

function Equipe() {
    const [players, setPlayers] = useState([
        {
            id : 1,
            player_name : 'Logoss2.png',
            picture_player : 'Logoss.png',
            firstname : 'Hugo',
            lastname : 'Poutrel',
            qualities : 'Souriant, Motivé, Rigoureux',
            palmares : 'Régulièrement top 50, Master Tour Dalaran : Top 64',
            quotes : 'Le destin n’est jamais tout tracé, c’est à toi d’écrire ton histoire.',
            age : '20 ans',
            occupation : 'Ecole de Commerce à Nice.',
            description_player : 'Motivé à devenir toujours meilleur en compétition, sans oublier les études ! Objectif : performer en Master Tour.',
            other_games : 'Rocket League',
            discord : '[Hope] Logoss#8803',
            twitter : 'https://twitter.com/Logoss_',
            facebook : '',
            instagram : '',
            tiktok : '',
            twitch : '',
            picture_player_reverse : 'Logoss_reverse.png',
        },
        {
            id: 3,
            player_name: "Roulian2.png",
            picture_player: "Roulian.png",
            firstname: "Julien",
            lastname: "Rondeau",
            qualities: "Déterminé, Calme, Ambitieux",
            palmares: "8-4 Master Tour Las Vegas, Master Tour Bucharest, Régulièrement Top 25 EU",
            quotes: "On apprend peu par la victoire, mais beaucoup par la défaite.",
            age: "22 ans",
            occupation: "Etudiant à l'université en anthropologie.",
            description_player: "Fan de sport, Tennis depuis 16 ans, sport études. Adepte des jeux tryhard. Désormais focus sur HS depuis février 2021.",
            other_games: "FIFA, Call of Duty",
            discord: "[Hope] Roulian#9446",
            twitter: "https://twitter.com/RoulianHS",
            facebook: "",
            instagram: "",
            tiktok: "",
            twitch: "",
            picture_player_reverse: "Roulian_reverse.png"
        },
        {
            id: 4,
            player_name: "Bongo2.png",
            picture_player: "Bongo.png",
            firstname: "Thomas",
            lastname: "Rondeau",
            qualities: "Compétiteur, Patient, A l'écoute",
            palmares: "Régulièrement top 100 Europe, Qualifié Master Tour Silvermoon, Gagnant du tournois Hope Esport 1",
            quotes: "On peut perdre en prenant des risques mais on ne gagne jamais sans en prendre.",
            age: "24 ans",
            occupation: "Professeur de tennis",
            description_player: "Tennis depuis 15 ans, grand fan de sport, d’animés, mangas.",
            other_games: "Call of Duty, Overwatch, Diablo",
            discord: "[Hope] Bongo#7298",
            twitter: "https://twitter.com/HsBongo",
            facebook: "",
            instagram: "",
            tiktok: "",
            twitch: "",
            picture_player_reverse: "Bongo_reverse.png"
        }
    ]);

    // useEffect(() => {
    //     axios
    //     .get('http://localhost:8000/api/players')
    //     .then((res) => res.data)
    //     .then((data) => setPlayers(data))
    // }, [])


    return (
        <div className="Team">

            {players.map((player) => (
                <div key={player.id} className="team">
                    <PlayerCard playerCard={player}/>
                </div>
            ))}
        </div>
    )
}

export default Equipe
