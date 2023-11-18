// EventsPage.tsx
import React from "react";
import "./events.scss";
import imagineEveniment from "../../assets/images/evenimenteRevelion.png";

const Events = () => {
  const events = [
    { id: 1, title: "Concert live", date: "2023-12-01" },
    { id: 2, title: "Seara tematică", date: "2023-12-15" },
    { id: 3, title: "Party Night", date: "2023-12-25" },
  ];

  return (
    <div>
      <div className="eventsPage">
        <div className="infoPagina">
          <p>
            Acasa&nbsp;{">"}
            <span>{">"}&nbsp;Evenimente</span>
          </p>
        </div>
        
        <h1>Evenimente</h1>
        <div className="events-list">
          {events.map((event) => (
            <div key={event.id} className="event-item">
              <div className="event-image">
                <img src={imagineEveniment} alt="perete"></img>
              </div>
              <div className="event-details">
                <h2>{event.title}</h2>
                <p>Data: {event.date}</p>
                <p>Detalii despre eveniment</p>
                <p></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="footerEvents">
        <div className="footerEvents-item">
          <p>Sunati Acum: 074 592 4437 - informatii</p>
        </div>
        <div className="footerEvents-item">
          <p>Orar: intre 9:00-00:00</p>
        </div>
        <div className="footerEvents-item">
          <p>Rezervari: 074 592 3346 - intre 9:00-21:00</p>
        </div>
      </div>
    </div>
  );
};

export default Events;
