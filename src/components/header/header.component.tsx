import React from "react";
import './header.component.scss'
import { Link } from "react-router-dom";

export const Header = () => (

  <div>
    {/* <div id="infoTop">
      <h4>
        <i className="fa fa-map-location-dot"></i> Str. Gheorghe Șincai 15, Baia
        Mare
      </h4>
      <h4>
        <i className="fa fa-phone"></i> 074 592 4437 <span>(rezervare)</span>-intre:
        9:00-00:00
      </h4>
      <h4>
        <i className="fa fa-phone"></i> 074 592 3346 <span>(evenimente)</span>
        -intre: 9:00-00:00
      </h4>
    </div> */}
    <nav>
      <h2 className="nume">
        Butoiasu' Cu <span>Bere</span>
      </h2>
      <ul>
        <Link to="/home" className="link">
        Home
        </Link>
        <Link to="/menu" className="link">
          Meniu
        </Link>
        <Link to="/reservation" className="link">
          Rezervare
        </Link>
        <Link to="/events" className="link">
          Evenimente
        </Link>
        <Link to="/contact" className="link">
          Contacte
        </Link>
      </ul>
    </nav>
    
  </div>
);
export { Link };

