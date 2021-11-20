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

            <p className="homeText">La Hope ESport est une association française créée en 2021 qui réunit des joueurs Hearthstone en une équipe compétitive. </p>
            <p className="homeText">Pour découvrir nos joueurs, notre staff, nos objectifs et plein d’autres choses encore, ce site est fait pour vous.</p>
            <p className="homeText">Voici notre site web contenant toutes ces informations.</p>
        </div>
    )
}

export default Home;
