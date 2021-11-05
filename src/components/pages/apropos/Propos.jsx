import React from "react";
import "./Propos.css";
import roulanvipere from "../../../assets/roulanvipere.png";
import tournoiexemple from "../../../assets/tournoiexemple.png";
import handshake from "../../../assets/handshake.jpg";
import Untiltheend from "../../../assets/untiltheend.jpg";

function Propos() {
  return (
    <div className="propos">
      <div className="Divpropos">
        <h2 className="proposH2">Historique</h2>
        <div className="proposCombler">
          <div className="proposComblerText">
            <p className="proposP">
              De compétiteurs à entrepreneurs, deux amis Bordelais Florian
              Guéraçague et Jules Arino décident de créer leur propre structure
              esportive spécialisée sur Hearthstone, jeu de cartes virtuel le
              plus joué au monde. En quatre mois de préparation, la structure
              prend forme et s’officialise en avril 2021 après le recrutement de
              huit responsables et trois joueurs compétitifs.
            </p>
          </div>
          <img
            className="ImageproposShake"
            src={handshake}
            alt="Serrage de mains"
          />
        </div>
        {/* <h3 className="proposH3">
          Voici nos principaux objectifs pour l’année 2021 :
        </h3> */}
        <div className="proposCombler">
          <p className="proposP">
            Animés par la volonté de créer une équipe avec des valeurs
            d’excellence, les ambitions sont claires :
          </p>
          <p>
            <li>
              Performer dans les tournois majeurs en amenant nos joueurs vers
              l’excellence{" "}
            </li>
            <li>
              Fédérer une communauté d’abord française puis internationale{" "}
            </li>
            <li>
              Organiser des tournois afin de promouvoir et développer la scène
              Hearthstone
            </li>
            <li>
              Devenir une structure référente dans l’univers d’Hearthstone
            </li>
          </p>
          <div className="proposImage1">
            <img
              className="ImageproposShake"
              src={roulanvipere}
              alt="Exemple Joueur"
            />
          </div>
        </div>
        {/* <h3 className="proposH3">
          Afin de mener à bien nos projets, voici les étapes que nous avons
          parcourues jusqu’ici :
        </h3> */}
        <div className="proposCombler">
          <p className="proposP">
            En seulement 6 mois, nous comptons déjà 5 qualifications aux
            meilleurs tournois internationaux et l’organisation de deux tournois
            communautaires.
          </p>

          <p className="proposP">
            Ayant la volonté de faire plaisir à notre communauté, notre discord
            se développe à grande vitesse, ce qui va accélérer l’arrivée de
            nouveaux tournois et de nos concepts originaux.
          </p>

          <p className="proposP">
            En outre, notre Web TV annoncera l’arrivée de streams réguliers,
            pour vous proposer un contenu audiovisuel, et vous faire connaître
            notre équipe et nos joueurs. Restez à l’affût des moindres
            informations !
          </p>
          <div className="proposImage1">
            <img
              className="ImageproposShake"
              src={tournoiexemple}
              alt="Exemple tournoi"
            />
          </div>
        </div>

        {/* <h2 className="proposH2">Ambitions :</h2>

        <h3 className="proposH3">Nos ambitions à long terme sont claires :</h3>

        <p className="proposP">
          Devenir une structure professionnelle et professionnalisante.
        </p>

        <p className="proposP">
          Mettre en place un maximum d’évènements, à la fois en ligne, mais
          aussi en présentiel, afin de développer et promouvoir la scène
          Hearthstone (d’abord au niveau national, puis mondial).
        </p>
        <p className="proposP">
          En outre, nous nous donnerons les moyens de devenir une des structures
          référentes sur Hearthstone. Nous tenons à voir nos joueurs progresser,
          tout en assurant une convivialité et une bonne entente !
        </p>
        <p className="proposP">
          Nous nous donnerons à cœur pour réaliser différents projets, afin de
          satisfaire la communauté Hearthstone.
        </p> */}
        <div className="proposCombler">
          <p className="proposP">
            Cependant ce n’est que le début pour notre équipe ambitieuse car
            après tout, pourquoi devrions-nous nous fixer des limites ?
          </p>
          <p className="proposP">#untiltheend</p>
          <div className="untilEnd">
            <img
              src={Untiltheend}
              alt="banniere hope"
              className="untilTheEnd"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Propos;
