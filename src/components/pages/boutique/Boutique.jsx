import React from "react";
import "./Boutique.css";

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
      <img src="" alt="Image Tshirt"></img>
      <p className="boutiqueP">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        necessitatibus non vel rerum quam illo accusantium. Maiores ab ducimus
        fugit architecto reiciendis cum amet natus soluta, eum voluptas, aliquid
        omnis.
      </p>
      <button
        className="boutiqueButton"
        target="_blank"
        href="https://eliminate.fr/categorie-produit/hope-esport/"
      >
        Boutique
      </button>
    </div>
  );
}

export default Boutique;
