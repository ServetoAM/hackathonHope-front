import React from "react";
import "./Boutique.css";
import shirt_front from "../../../assets/shirt_front.png";

function Boutique() {
  return (
    <div className="boutiqueDiv">
      <h2 className="boutiqueTitre">Hope Merch</h2>
      <p className="boutiqueP">
        Retrouvez les articles emblématiques de l'équipe sur notre boutique affiliée !
      </p>
      <img
        className="boutiqueShirtFront"
        src={shirt_front}
        alt="Image Tshirt"
      />
      <p className="boutiqueP">

      </p>
      <a 
      target="_blank" 
      href="https://eliminate.fr/categorie-produit/hope-esport/" 
      >
        <button className="boutiqueButton">Boutique</button>
      </a>
    </div>
  );
}

export default Boutique;
