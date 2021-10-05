import React, { useState } from "react";
import "./ContactForm.css"

const Contact_Form = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:8000/contact", {
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
          <label htmlFor="name" className="contactLabel">Nom</label>
        </div>

        <div className="contact">
          <input type="text" id="name" className="contact" required />
        </div>

        <div>
          <label htmlFor="email" className="contactLabel">Email</label>
        </div>

        <div className="contact">
          <input type="email" id="email" className="contact" required />
        </div>

        <div>
          <label htmlFor="message" className="contactLabel">Message</label>
        </div>

        <div>
          <textarea id="message" className="contact" required />
        </div>
        
        <button className="button" type="submit">{status}</button>
      </form>
    </div>
  );
};

export default Contact_Form;