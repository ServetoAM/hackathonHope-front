import React from 'react';
import HS_Logo from '../../../assets/HS_Logo.png';
import shirt_back from '../../../assets/shirt_back.png';
import shirt_front from '../../../assets/shirt_front.png';
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div className="homeDiv">      

            <p className="homeText">Hope Esport est une association esport autour du jeu HearthStone. </p>
            <p className="homeText">Elle est présente sur la scène de la compétition française et européenne. Elle possède sa propre merch disponible pour tous. Les valeurs principales sont l'ambition, la performance, la communauté et l'esprit d'équipe. Hope Esport se bat #Untiltheend.</p>
            
        </div>
    )
}

export default Home;
