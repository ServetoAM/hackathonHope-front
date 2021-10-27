import React from "react";
import "./Boutique.css";
import shirt_front from "../../../assets/shirt_front.png";
import shirt_back from "../../../assets/shirt_back.png";

function Boutique() {
  return (
    <div className="boutiqueDiv">
      <h1 className="boutiqueTitre">Hope Merch</h1>
      <p className="boutiqueP">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
        exercitationem placeat possimus consectetur voluptate ea ratione dicta
        pariatur minus. Quae recusandae voluptatum labore neque nemo tempore
        incidunt, voluptates omnis magni?
      </p>
      <a
        target="_blank"
        href="https://eliminate.fr/categorie-produit/hope-esport/"
      >
        <button className="boutiqueButton">Boutique</button>
      </a>
      <div className="boutiqueDivShirt">
        <img
          className="boutiqueShirtFront"
          src={shirt_front}
          alt="Image Tshirt"
        />
        <img
          className="boutiqueShirtFront"
          src={shirt_back}
          alt="Image Tshirt Derrière"
        />
      </div>
      <p className="boutiqueP">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        necessitatibus non vel rerum quam illo accusantium. Maiores ab ducimus
        fugit architecto reiciendis cum amet natus soluta, eum voluptas, aliquid
        omnis.
      </p>
    </div>
  );
}

export default Boutique;
