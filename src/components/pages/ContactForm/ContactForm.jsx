import React, { useState } from "react";
import "./ContactForm.css"

const ContactForm = () => {
  const [status, setStatus] = useState("Envoyer");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi...");
    const { name, email, motifs, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      motifs: motifs.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <div className="globalForm">
      <p>Envoyez-nous un message via le formulaire ou contactez-nous directement via notre adresse mail :  <b>contact@hope-esport.fr</b></p>
      <form className="contactFormDiv" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="contactLabel">Pseudo / Prénom</label>
        </div>

        <div className="contact">
          <input type="text" id="name"  required />
        </div>

        <div>
          <label htmlFor="email" className="contactLabel">Email</label>
        </div>

        <div className="contact">
          <input type="email" id="email" required />
        </div>

        <div className="contact">
          <select className="selectMotif" name="motifs" id="motifs"> 
            <option value="">Choisir un motif de contact</option>
            <option value="recrutement">Recrutement</option>
            <option value="partenariat">Partenariat / Sponsoring</option>
            <option value="bug">Bug sur le site</option>
            <option value="autre">Autre</option>
          </select>
        </div>


        <div>
          <label htmlFor="message" className="contactLabel">Message</label>
        </div>

        <div className="contact">
          <textarea id="message"  required />
        </div>

        <button className="button" type="submit">{status}</button>
      </form>
    </div>
  );
};

export default ContactForm;