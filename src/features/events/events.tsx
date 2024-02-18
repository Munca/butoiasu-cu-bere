import React from "react";
import "./events.scss";
import imagineSearaConcert from "../../assets/images/imagineSearaConcert.webp";
import searaTematica from "../../assets/images/searaTematica.jpg";
import imagineEveniment from "../../assets/images/imagineEvenimente.jpg";

const Events = () => {
  const events: {
    [key: number]: {
      title: string;
      date: string;
      details: string;
      image: string;
    };
  } = {
    1: {
      title: "Concert live",
      date: "15-03-2024",
      details:
        "Concertul live de la restaurantul Butoiașul cu Bere este un eveniment cultural și muzical ce aduce în prim plan artiști locali din orașul respectiv. Atmosfera este una vibrantă și plină de energie, oferind participanților ocazia de a se bucura de muzică în direct într-un cadru relaxant și prietenos.",
      image: imagineSearaConcert,
    },
    2: {
      title: "Seara tematică",
      date: "22-03-2024",
      details:
        "Seara tematică cu stand-up la restaurantul Butoiașul cu Bere este un eveniment de divertisment ce aduce în prim plan artiști locali sau naționali specializați în comedy stand-up. Atmosfera este una relaxată și plină de umor, oferind participanților o experiență distractivă și memorabilă.",
      image: searaTematica,
    },
    3: {
      title: "Party Night",
      date: "30-03-2024",
      details:
        "Party Night la restaurantul Butoiașul cu Bere este un eveniment vibrant și plin de energie, care aduce în prim plan o atmosferă de petrecere și distracție pentru toți participanții. Atmosfera este una festivă și efervescentă, oferind oportunitatea de a dansa și de a socializa într-un cadru prietenos și relaxant.",
      image: imagineEveniment,
    },
  };

  return (
    <div>
      <div className="eventsPage">
        <h1>Evenimentele Butoilui</h1>
        <div className="events-list">
          {Object.keys(events).map((eventId: string) => {
            const event = events[parseInt(eventId)];
            return (
              <div key={eventId} className="event-item">
                <div className="event-image">
                  <img src={event.image} alt={event.title}></img>{" "}
                </div>
                <div className="event-details">
                  <h2>{event.title}</h2>
                  <p>Data: {event.date}</p>
                  <p>{event.details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className="footerEvents">
        <div className="footerEvents-item">
          <p>Sunati Acum: 074 592 4437 - informatii</p>
        </div>
        <div className="footerEvents-item">
          <p>Orar: intre 9:00-00:00</p>
        </div>
        <div className="footerEvents-item">
          <p>Rezervari: 074 592 3346 - intre 9:00-21:00</p>
        </div>
      </div> */}
    </div>
  );
};

export default Events;
