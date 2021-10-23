import "./PlayerCard.css"
import React from 'react';
import Controller from "../../assets/controller.png";
// import { FaTwitter, FaFacebookF, FaInstagram, FaTiktok, FaTwitch, FaDiscord } from 'react-icons/fa';


function PlayerCard({playerCard}) {

    return (
        <div className="container-card">   
            <div className="card">
                <div className="card_face">
                    <img className="joueur" alt={playerCard.firstname} src={process.env.PUBLIC_URL + "/assets/" + playerCard.picture_player}/>
                </div>
                <div className="card_face card_face-back">    
                    <img className="joueur" alt={playerCard.firstname} src={process.env.PUBLIC_URL + "/assets/" + playerCard.picture_player_reverse}/>
                </div>
            </div>
        </div>
            
            
            /* {playerCard.firstname}
            {playerCard.lastname}
            {playerCard.quotes}
            <img className="joueur" alt={playerCard.firstname} src={process.env.PUBLIC_URL + "/assets/" + playerCard.picture_player}/>
            <ul>
                <li>{playerCard.age}</li>
                <li>{playerCard.occupation}</li> 
                <li>{playerCard.qualities}</li>
            </ul>                        
                <img src={Controller} alt="" className="joueur" />
            <ul>
                <li>{playerCard.other_games}</li>
                <li>Discord : {playerCard.discord}</li> 
            </ul>          
            <ul>
                <li>{playerCard.palmares}</li>
                <li>{playerCard.description_player}</li>
            </ul>
                        
                    
                    <li className={`${playerCard.twitter}` === "" ? 'empty' : 'full'}><a href={playerCard.twitter} target="blank_"><FaTwitter/></a></li>
					<li className={`${playerCard.twitch}` === "" ? 'empty' : 'full'}><a href={playerCard.twitch} target="blank_"><FaTwitch/></a></li>
					<li className={`${playerCard.instagram}` === "" ? 'empty' : 'full'}><a href={playerCard.instagram} target="blank_"><FaInstagram/></a></li>
					<li className={`${playerCard.facebook}` === "" ? 'empty' : 'full'} ><a href={playerCard.facebook} target="blank_"><FaFacebookF/></a></li>
					<li className={`${playerCard.tiktok}` === "" ? 'empty' : 'full'}><a href={playerCard.tiktok} target="blank_"><FaTiktok/></a></li> */
       
    )
}

export default PlayerCard
