/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import "./home.scss";
import imagineRezervare from "../../assets/images/imagineRezervare.jpg";
import imagineMeniu from "../../assets/images/imagineMeniu.jpg";
import imagineEvenimente from "../../assets/images/imagineEvenimente.jpg";

const Home = () => {
  return (
    <div>
      <div className="intro">
        <h1>Bine ati venit!</h1>
        <p>
          Butoiașu' cu Bere a ramas si va ramane. Aici pulseaza viata! Local
          emblematic indragit de baimareni
        </p>
      </div>

      <div className="locatie">
        <div>
          <h2>Localizare</h2>
          <p>
            Restaurant Butoiasu Cu' Bere este situat langa Centrul Vechi al Baii
            Mari, aproape de multe alte atractii baimarene.Pentru a afla locatia
            exacta a restaurantului, dati click pe butonul de Locatie.
          </p>
        </div>
        <a href="/contact">
          <i className="fa fa-location-dot"></i> Locatie
        </a>
      </div>

      <div className="rezervare">
        <div>
          <img src={imagineRezervare} alt="imagine restaurant"></img>
        </div>
        <div>
          <h2>Rezervare</h2>
          <p>
            Pentru o masa delicioasa va incurajam sa faceti din timp o rezervare
            la restaurantul nostru. Acesta dispune de un loc interior amenajat
            intr-un stil vintage si modern, dar si de o terasa frumoasa
            amenajata in aer liber.
          </p>
          <a href="/reservation">
            <i className="fa fa-flag"></i> Rezervare
          </a>
        </div>
      </div>

      <div className="facilitati">
        <h2>Facilitati</h2>
        <div className="facility-item">
          {/* <FontAwesomeIcon icon={faWifi} className="icon" /> */}
          <p>Wifi Gratuit!</p>
        </div>
        <div className="facility-item">
          {/* <FontAwesomeIcon icon={faCar} className="icon" /> */}
          <p>Locuri De Parcare!</p>
        </div>
        <div className="facility-item">
          {/* <FontAwesomeIcon icon={faChild} className="icon" /> */}
          <p>Spatiu De Joaca!</p>
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
          <a href="/menu">
            <i className="fa fa-utensils"></i> Meniu
          </a>
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
