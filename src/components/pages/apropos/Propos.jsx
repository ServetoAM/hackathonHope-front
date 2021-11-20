import React from "react";
import "./Propos.css";
import roulanvipere from "../../../assets/roulanvipere.png";
import handshake from "../../../assets/handshake.jpg";
import tournoiexemple from "../../../assets/tournoiexemple.png";
import Untiltheend from "../../../assets/untiltheend.jpg";

import cuplevrai from "../../../assets/cuplevrai.png";

function Propos() {
  return (
    <div className="propos">
      <div className="proposText">
        <p>
          De compétiteurs à entrepreneurs, deux amis Bordelais Florian
          Guéraçague et Jules Arino décident de créer leur propre structure
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
<<<<<<< HEAD
        <p>#untiltheend</p>
      </div>
      <div className="untilEnd">
        <img src={Untiltheend} alt="banniere hope" className="untilTheEnd" />
      </div>
    </div>
  );
=======

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
        </p>
        <p className="proposP">
          Nous avons une grande volonté de nous intégrer en tant que structure
          vectrice du compétitif sur Hearthstone.
        </p>
        <p className="proposP">
          Pour ce qui est du moyen et long terme, nous voulons toucher le niveau
          européen. A très long terme, nous visons même des projets mondiaux.
          Car après tout, pourquoi devrions-nous nous fixer des limites ?
        </p>
        <div className="untilEnd">
          {/* display flex - row - margin bottom & top + div qui englobe  */}
          <div className="DivPuce">
            <img className="ImageAmbitions" src={cuplevrai} alt="puce" />
            <p className="proposP">
              Devenir une structure professionnelle et professionnalisante.
            </p>
          </div>
          <div className="DivPuce">
            <img className="ImageAmbitions" src={cuplevrai} alt="puce" />
            <p className="proposP">
              Mettre en place un maximum d’évènements, à la fois en ligne, mais
              aussi en présentiel, afin de développer et promouvoir la scène
              Hearthstone (d’abord au niveau national, puis mondial).
            </p>
          </div>
          <div className="DivPuce">
            <img className="ImageAmbitions" src={cuplevrai} alt="puce" />
            <p className="proposP">
              En outre, nous nous donnerons les moyens de devenir une des
              structures référentes sur Hearthstone. Nous tenons à voir nos
              joueurs progresser, tout en assurant une convivialité et une bonne
              entente !
            </p>
          </div>
          <div className="DivPuce">
            <img className="ImageAmbitions" src={cuplevrai} alt="puce" />
            <p className="proposP">
              Nous nous donnerons à cœur pour réaliser différents projets, afin
              de satisfaire la communauté Hearthstone.
            </p>
          </div>
          <div className="DivPuce">
            <img className="ImageAmbitions" src={cuplevrai} alt="puce" />
            <p className="proposP">
              Nous avons une grande volonté de nous intégrer en tant que
              structure vectrice du compétitif sur Hearthstone.
            </p>
          </div>
          <div className="DivPuce">
            <img className="ImageAmbitions" src={cuplevrai} alt="puce" />
            <p className="proposP">
              Pour ce qui est du moyen et long terme, nous voulons toucher le
              niveau européen. A très long terme, nous visons même des projets
              mondiaux. Car après tout, pourquoi devrions-nous nous fixer des
              limites ?
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
        </div>
        </div>
)
>>>>>>> 46e7e9740897eb5b3051d226b9dbefbca0ed8467
}

export default Propos;
