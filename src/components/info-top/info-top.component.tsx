import React from "react";
import "./info-top.styles.scss";
function InfoTop() {
  return (
    <div className="infoTop">
      <h4>
        <i className="fa fa-map-location-dot"></i> Str. Gheorghe Șincai 15, Baia
        Mare
      </h4>
      <h4>
        <i className="fa fa-phone"></i> 074 592 4437 <span>(rezervare)</span>
        -intre: 9:00-00:00
      </h4>
      <h4>
        <i className="fa fa-phone"></i> 074 592 3346 <span>(evenimente)</span>
        -intre: 9:00-00:00
      </h4>
    </div>
  );
}

export default InfoTop;
