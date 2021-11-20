import "./PlayerCard.css"
import React from 'react';
import Controller from "../../assets/controller.png";
import { FaTwitter, FaFacebookF, FaInstagram, FaTiktok, FaTwitch, FaDiscord } from 'react-icons/fa';


function PlayerCard({playerCard}) {

    return (
        <div className="container-card">   
            <div className="player-card">
                <div className="card-move">
                    <div className="card_face">
                    <img className="joueur" alt={playerCard.firstname} src={process.env.PUBLIC_URL + "/assets/" + playerCard.picture_player}/>
                    </div>
                    <div className="card_face-back boobs">    
                        <img className="joueur" alt={playerCard.firstname} src={process.env.PUBLIC_URL + "/assets/" + playerCard.picture_player_reverse}/>
                    
                    <div className="irl boobs caca">    
                        <div className="irl-name">
                            <div className="irl-name-info">{playerCard.firstname}</div>
                            <div className="irl-name-info">{playerCard.lastname}</div>
                            <div className="irl-name-info">{playerCard.age}</div>
                        </div>
                        <div className="occupation">{playerCard.occupation}</div>
            
                        <div className="qualities-quotes">
                            <div className="quotes">"{playerCard.quotes}"</div>
                            <div className="qualities">{playerCard.qualities}</div>       
                        </div>
                        <div>
                            <div className="other-games">Joue aussi à {playerCard.other_games}</div>
                            <div className="description-player">{playerCard.description_player}</div>
                            <div className="discord">Discord : {playerCard.discord}</div> 
                        </div>
                        
                        <div className="social-media">                 
                            <div className={`${playerCard.twitter}` === "" ? 'empty' : 'full'}><a href={playerCard.twitter} target="blank_"><FaTwitter/></a></div>
                            <div className={`${playerCard.twitch}` === "" ? 'empty' : 'full'}><a href={playerCard.twitch} target="blank_"><FaTwitch/></a></div>
                            <div className={`${playerCard.instagram}` === "" ? 'empty' : 'full'}><a href={playerCard.instagram} target="blank_"><FaInstagram/></a></div>
                        </div>
                    </div> 
                    </div>
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
