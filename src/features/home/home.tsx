/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import "./home.scss";
import imagineRezervare from "../../assets/images/imagineRezervare.jpg";
import imagineMeniu from "../../assets/images/imagineMeniu.jpg";
import imagineEvenimente from "../../assets/images/imagineEvenimente.jpg";
// import {} from 'chakr';

const Home = () => {
  return (
    <div>
      <div className="intro">
        <h1>Bine ati venit!</h1>
        <p>
          Butoiașu' cu Bere a rămas și va rămâne. Aici pulsează viața! Local
          emblematic îndrăgit de băimăreni.
        </p>
      </div>

      <div className="locatie">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: "20px",
          }}
        >
          <h2>Localizare</h2>
          <p>
            Restaurant Butoiașu Cu' Bere este situat lângă Centrul Vechi al
            Baiei Mari, aproape de multe alte atracții băimărene. Pentru a afla
            locația exactă a restaurantului, dați click pe butonul de Locație.
          </p>
          <iframe
            title="localizare"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.32036605377!2d23.57654431559674!3d47.65877247918809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4737dc65e2933df7%3A0xdf50fff22047c116!2sButoiașu&#39;%20cu%20Bere!5e0!3m2!1sro!2sro!4v1677495428492!5m2!1sro!2sro"
            width="900px"
            height="500px"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="rezervare">
        <div>
          <img src={imagineRezervare} alt="imagine restaurant"></img>
        </div>
        <div>
          <h2>Rezervare</h2>
          <p>
            Pentru o masă delicioasă, vă încurajăm să faceți din timp o
            rezervare la restaurantul nostru. Acesta dispune de un loc interior
            amenajat într-un stil vintage și modern, dar și de o terasă frumoasă
            amenajată în aer liber.
          </p>
          <a href="/reservation">
            <i className="fa fa-flag"></i> Rezervare
          </a>
        </div>
      </div>

      <div className="meniu">
        <div>
          <h2>Meniul Restaurantului</h2>
          <p>
            Restaurantul si terasa de vara atrag iubitorii de preparate
            traditionale morosenesc si preparate din carne de vanat, acestea
            fiind disponibile atat zi de zi cat si pentru evenimente speciale
            organizate in cadrul pensiunii.
          </p>
        </div>
        <img src={imagineMeniu} alt="Imagine Meniu"></img>
      </div>

      <div className="evenimente">
        <img src={imagineEvenimente} alt="Imagine Eveniment"></img>
        <div>
          <h2>Evenimente</h2>
          <p>
            Restaurantul Butoiasu' Cu Bere este un loc excelent atat pentru
            sustinerea spectacolelor cat si a celor mai importante evenimente
            din viata, precum zilele de nastere care vor fi de neuitat aici la
            restaurant.
          </p>
          <a href="/events">
            <i className="fa-regular fa-calendar-days"></i> Evenimente
          </a>
        </div>
      </div>

      <div className="footerHome">
        <div className="footerHome-item">
          <p>Sunati Acum: 074 592 4437 - informatii</p>
        </div>
        <div className="footerHome-item">
          <p>Orar: intre 9:00-00:00</p>
        </div>
        <div className="footerHome-item">
          <p>Rezervari: 074 592 3346 - intre 9:00-21:00</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
