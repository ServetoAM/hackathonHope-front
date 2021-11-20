import React from 'react';
import './Propos.css';
import roulanvipere from '../../../assets/roulanvipere.png';
import handshake from '../../../assets/handshake.jpg';

import Untiltheend from "../../../assets/untiltheend.jpg";

import cuplevrai from '../../../assets/cuplevrai.png'


function Propos() {
    return (
        <div className="propos">
            <div className="Divpropos">
                <h2 className="proposH2">Historique</h2>
            <div className="proposCombler" >
                <div className="proposComblerText">
                    <p className="proposP">Afin de combler leurs différents objectifs, SKZ et Zary décident de créer leur propre structure en décembre 2020.</p>
                </div>  
                    <img className="ImageproposShake" src={handshake} alt="Serrage de mains"/>
            </div>
            <h3 className="proposH3">Voici nos principaux objectifs pour l’année 2021 :</h3>
           
            <p className="proposP">Développer la scène compétitive Hearthstone à travers l’organisation de différents évènements (tournois communautaires, tournois rémunérés, etc.).
                Recruter des joueurs « espoirs », riches d’ambitions, afin de les pousser vers l’excellence.
                A plus long terme, devenir une structure référente sur Hearthstone.
            </p>
            <div className="proposImage1" >
                <img className="Imagepropos1" src={roulanvipere} alt="Exemple Joueur"/>
            </div>
            <h3 className="proposH3">Afin de mener à bien nos projets, voici les étapes que nous avons parcourues jusqu’ici :</h3>
            
            <p className="proposP">
            Nous avons commencé par recruter un staff afin d’assurer le bon développement de la structure.
            La suite logique fut le recrutement de joueurs prometteurs : Roulian, Logoss et Bongo, qui se qualifient régulièrement aux tournois mondiaux (Master Tour).
            Afin de rassembler notre communauté, nous avons organisé notre premier tournoi communautaire en juin 2021.
            En août, Bongo et Roulian auront l’occasion de représenter nos couleurs via leur participation au Master Tour Silvermoon.  
            </p>
            
            <p className="proposP">
            Notre site web constitue l’accès direct à tous les réseaux sociaux de nos joueurs, mais également du staff, et bien évidemment de la structure. Notre Discord communautaire se développe à grande vitesse, ce qui va accélérer l’arrivée de nouveaux tournois et de nos concepts originaux.
            </p>
            
            <p className="proposP">
            Notre WebTV annoncera l’arrivée de streams réguliers, pour vous proposer un contenu audiovisuel, et vous faire connaître notre équipe et nos joueurs. Restez à l’affût des moindres informations !
            </p>

            {/* <div className="proposImage2" >
                <img className="Imagepropos2" src={tournoiexemple} alt="Exemple tournoi"/>
            </div> */}

            {/* <div className="proposImage" >
                <img className="Imagepropos" src={tournoiexemple} alt="Exemple tournoi"/>
            </div> */}


                <h2 className="proposH2">Ambitions :</h2>
           
            <h3 className="proposH3">Nos ambitions à long terme sont claires :</h3>

            
            <p className="proposP">
            Devenir une structure professionnelle et professionnalisante.
            </p>

            <p className="proposP">
            Mettre en place un maximum d’évènements, à la fois en ligne, mais aussi en présentiel, afin de développer et promouvoir la scène Hearthstone (d’abord au niveau national, puis mondial).
            </p>
            <p className="proposP">
            En outre, nous nous donnerons les moyens de devenir une des structures référentes sur Hearthstone. Nous tenons à voir nos joueurs progresser, tout en assurant une convivialité et une bonne entente !
            </p>
            <p className="proposP">
Nous nous donnerons à cœur pour réaliser différents projets, afin de satisfaire la communauté Hearthstone.
            </p>
            <p className="proposP">
Nous avons une grande volonté de nous intégrer en tant que structure vectrice du compétitif sur Hearthstone.
            </p>
            <p className="proposP">
Pour ce qui est du moyen et long terme, nous voulons toucher le niveau européen. A très long terme, nous visons même des projets mondiaux. Car après tout, pourquoi devrions-nous nous fixer des limites ?
            </p>
            <div className="untilEnd">
            <img src={Untiltheend} alt="banniere hope" className="untilTheEnd" />

            {/* display flex - row - margin bottom & top + div qui englobe  */}
            <div className="DivPuce">
                <img className="ImageAmbitions" src={cuplevrai} alt="puce"/> 
                <p className="proposP">
                   Devenir une structure professionnelle et professionnalisante.
                </p>
            </div>
            <div className="DivPuce">
                <img className="ImageAmbitions" src={cuplevrai} alt="puce"/> 
                <p className="proposP">
                    Mettre en place un maximum d’évènements, à la fois en ligne, mais aussi en présentiel, afin de développer et promouvoir la scène Hearthstone (d’abord au niveau national, puis mondial).
                </p>
            </div>
            <div className="DivPuce">
                <img className="ImageAmbitions" src={cuplevrai} alt="puce"/>
                <p className="proposP">
                   En outre, nous nous donnerons les moyens de devenir une des structures référentes sur Hearthstone. Nous tenons à voir nos joueurs progresser, tout en assurant une convivialité et une bonne entente !
                </p>
            </div>
            <div className="DivPuce">
                <img className="ImageAmbitions" src={cuplevrai} alt="puce"/>
                <p className="proposP">
                    Nous nous donnerons à cœur pour réaliser différents projets, afin de satisfaire la communauté Hearthstone.
                </p>
            </div>
            <div className="DivPuce">
                <img className="ImageAmbitions" src={cuplevrai} alt="puce"/>
                <p className="proposP">
                    Nous avons une grande volonté de nous intégrer en tant que structure vectrice du compétitif sur Hearthstone.
                </p>
            </div>
            <div className="DivPuce">
                <img className="ImageAmbitions" src={cuplevrai} alt="puce"/>
                <p className="proposP">
                    Pour ce qui est du moyen et long terme, nous voulons toucher le niveau européen. A très long terme, nous visons même des projets mondiaux. Car après tout, pourquoi devrions-nous nous fixer des limites ?
                </p>

            </div>
            </div>
            </div>
        </div>
    )
}

export default Propos
