import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div>
      <div className="contact-page">
        <div className="infoPagina">
          <p>
            Acasa&nbsp;{">"}
            <span>{">"}&nbsp;Contacte</span>
          </p>
        </div>
        <h1>Contactează-ne</h1>
        <div className="contact-info">
          <div>
            <h2>Adresă</h2>
            <p>Str. Gheorghe Șincai 15, Baia Mare</p>
          </div>
          <div>
            <h2>Telefon</h2>
            <p>074 592 4437</p>
          </div>
          <div>
            <h2>Email</h2>
            <p>butoiasucubere@yahoo.com</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Trimite-ne un mesaj</h2>
          <form>
            <label>
              Nume:
              <input type="text" placeholder="Numele tău" />
            </label>
            <label>
              Email:
              <input type="email" placeholder="Adresa ta de email" />
            </label>
            <label>
              Mesaj:
              <textarea
                rows={5}
                placeholder="Scrie mesajul tău aici"
              ></textarea>
            </label>
            <button type="submit">Trimite</button>
          </form>
        </div>
      </div>

      {/* <div className="footerContact">
        <div className="footerContact-item">
          <p>Sunati Acum: 074 592 4437 - informatii</p>
        </div>
        <div className="footerContact-item">
          <p>Orar: intre 9:00-00:00</p>
        </div>
        <div className="footerContact-item">
          <p>Rezervari: 074 592 3346 - intre 9:00-21:00</p>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
