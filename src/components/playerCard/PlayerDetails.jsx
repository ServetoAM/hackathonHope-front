import React, { useEffect, useState } from 'react';
import './PlayerDetails.scss';
import Controller from "../../assets/controller.png";
import Mylife from "../../assets/mylife.png"
import { FaTwitter, FaFacebookF, FaInstagram, FaTiktok, FaTwitch, FaDiscord } from 'react-icons/fa';
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


    return (
        <div className="Main">
           <div className="panel">
                <div className="right-panel">
                    
                <div className="name">
                            <p>{playerDetails.firstname}</p>
                            <p>{playerDetails.lastname} </p>
                        </div>
                    <p className="citation">"{playerDetails.quotes}"</p>
                        

                    <div className="main-info-container"> 

                        <div className="container-1">
                        <div className="topCard">
                        <img className="joueur" alt={playerDetails.firstname} src={process.env.PUBLIC_URL + "/assets/" + playerDetails.picture_player}/>
                        </div>
                            <div className="bottomCard">
                            <ul>
                                <li className="cardTextStyle">{playerDetails.age}</li>
                                <li className="cardTextStyle">{playerDetails.occupation}</li> 
                                <li className="cardTextStyle">{playerDetails.qualities}</li>
                            </ul>
                            </div>
                        </div>

                        <div className="second-info">
                    <img src={Controller} alt="" className="joueur" />
                    <ul>
                        <li className="cardTextStyle">{playerDetails.other_games}</li>
                        <li className="cardTextStyle">Discord : {playerDetails.discord}</li>
                        
                    </ul>
                    </div>

                        <div className="container-2">
                        <img src={Mylife} alt="" className="joueur"/>
                        <ul>
                            <li className="cardTextStyle">{playerDetails.palmares}</li>
                            <li className="cardTextStyle">{playerDetails.description_player}</li>
                        </ul>
                        </div>
                        </div>
                    <div className="socialIcon">
                    <li className={`${playerDetails.twitter}` === "" ? 'empty' : 'full'}><a href={playerDetails.twitter} target="blank_"><FaTwitter/></a></li>
					<li className={`${playerDetails.twitch}` === "" ? 'empty' : 'full'}><a href={playerDetails.twitch} target="blank_"><FaTwitch/></a></li>
					<li className={`${playerDetails.instagram}` === "" ? 'empty' : 'full'}><a href={playerDetails.instagram} target="blank_"><FaInstagram/></a></li>
					<li className={`${playerDetails.facebook}` === "" ? 'empty' : 'full'} ><a href={playerDetails.facebook} target="blank_"><FaFacebookF/></a></li>
					<li className={`${playerDetails.tiktok}` === "" ? 'empty' : 'full'}><a href={playerDetails.tiktok} target="blank_"><FaTiktok/></a></li>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PlayerDetails
