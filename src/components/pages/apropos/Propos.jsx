import React from "react";
import "./Propos.css";
import about1 from '../../../assets/apropos1.jpg'
import about2 from '../../../assets/apropos2.png'

function Propos() {
  return (
    <div className="propos">
      <div className="proposText">
        <h2>À propos de notre association</h2>
        <img className='about-img' src={about1} alt="img tournois" />
        <p>
          De compétiteurs à entrepreneurs, deux amis bordelais, Florian
          Guéraçague et Jules Arino, décident de créer leur propre structure
          esportive spécialisée sur Hearthstone, jeu de cartes virtuel le plus
          joué au monde. En quatre mois de préparation, la structure prend forme
          et s’officialise en avril 2021 après le recrutement de huit
          responsables et trois joueurs compétitifs. Animés par la volonté de
          créer une équipe avec des valeurs d’excellence, les ambitions sont
          claires :
        </p>
        <ul>
          <li>
            Performer dans les tournois majeurs en amenant nos joueurs vers
            l’excellence{" "}
          </li>
          <li>Fédérer une communauté d’abord française puis internationale </li>
          <li>
            Organiser des tournois afin de promouvoir et développer la scène
            Hearthstone
          </li>
          <li>Devenir une structure référente dans l’univers d’Hearthstone</li>
        </ul>
        <p>
          En seulement 6 mois, nous comptons déjà 5 qualifications aux meilleurs
          tournois internationaux et l’organisation de deux tournois
          communautaires.
        </p>
        <img className='about-img' src={about2} alt="img tournois" />
        <p>
          Ayant la volonté de faire plaisir à notre communauté, notre discord se
          développe à grande vitesse, ce qui va accélérer l’arrivée de nouveaux
          tournois et de nos concepts originaux.
        </p>
        <p>
          En outre, notre Web TV annoncera l’arrivée de streams réguliers, pour
          vous proposer un contenu audiovisuel, et vous faire connaître notre
          équipe et nos joueurs. Restez à l’affût des moindres informations !
        </p>
        <p>
          Cependant ce n’est que le début pour notre équipe ambitieuse car après
          tout, pourquoi devrions-nous nous fixer des limites ?
        </p>
        <div className='end-text'>
          <p>#Untiltheend 🏆</p>
          {/* <img className='trophy' src="https://hotemoji.com/images/dl/3/trophy-emoji-by-twitter.png" alt="trophy emoji" /> */}
        </div>
      </div>

    </div>
  );
}

export default Propos;
