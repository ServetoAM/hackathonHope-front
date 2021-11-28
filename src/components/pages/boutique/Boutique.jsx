import React from "react";
import "./Boutique.css";
import shirt_front from "../../../assets/shirt_front.png";
import shirt_back from "../../../assets/shirt_back.png";
import Carousel from "../../carousel/Carousel";


function Boutique() {
  return (
    <div className="boutiqueDiv">
      <p className="boutiqueP">
        Retrouvez les articles emblématiques de l'équipe sur notre 
        <a className='shop-link' target="_blank"  href="https://eliminate.fr/categorie-produit/hope-esport/" >boutique</a> 
        affiliée !
      </p>
      <Carousel />
      <div className='shirt-images'>
        <a target="_blank" href="https://eliminate.fr/categorie-produit/hope-esport/" >
          <img
          className="boutiqueShirtFront"
          src={shirt_front}
          alt="Image Tshirt"
          />
        </a>
        <a target="_blank" href="https://eliminate.fr/categorie-produit/hope-esport/" >
          <img
            className="boutiqueShirtFront"
            src={shirt_back}
            alt="Image Tshirt"
          />
        </a>
      </div>
      {/* <a 
      target="_blank" 
      href="https://eliminate.fr/categorie-produit/hope-esport/" 
      >
        <button className="boutiqueButton">Boutique</button>
      </a> */}
    </div>
  );
}

export default Boutique;
