import React from 'react';
import HS_Logo from '../../../assets/HS_Logo.png';
import shirt_back from '../../../assets/shirt_back.png';
import shirt_front from '../../../assets/shirt_front.png';
import './Home.css'

function Home() {
    return (
        <div className="homeDiv">
            <div className="homeSub">
                <img className="HSLogo1" src={HS_Logo} alt="Logo HearthStone" />
                <h1 className="homeTitle">Accueil</h1>   
                <img className="HSLogo2" src={HS_Logo} alt="Logo HearthStone" />         
            </div>
            <p className="homeText">Hope Esport est une association esport autour du jeu HearthStone. </p>
            
            <p className="homeText">Elle est présente sur la scène de la compétition française et européenne. Elle possède sa propre merch disponible pour tous. Les valeurs principales sont l'ambition, la performance, la communauté et l'esprit d'équipe. Hope Esport se bat #Untiltheend.</p>
            <a className="homeShirt" href="https://eliminate.fr/categorie-produit/hope-esport/" target="_blank">
                    <img className="shirt" 
                    src={shirt_front} 
                    alt="Tshirt Asso" 
                    />
                    <img className="shirt" 
                    src={shirt_back} 
                    alt="Tshirt Asso" 
                    href="https://eliminate.fr/categorie-produit/hope-esport/"
                    />
            </a>
        </div>
    )
}

export default Home;
