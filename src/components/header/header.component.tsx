import React from "react";
import "./header.component.scss";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { signOutUser } from "../../firebase/firebase.utils";
import { setCurrentUser } from "../../features/authentication/user.slice";

export const Header = () => {
  const user = useAppSelector((state) => state.user.currentUser);
  const dispatch = useAppDispatch()

  const handleSignOut = async()=>{
   await signOutUser()
   dispatch(setCurrentUser(null))
  }
  return (
    <div className="header-wrapper">
      <div className="infoTop">
        <h4>
          <i className="fa fa-map-location-dot"></i> Str. Gheorghe Șincai 15,
          Baia Mare
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
      <div className="navbar">
        <h2 className="title">
          Butoiasu' Cu <span>Bere</span>
        </h2>
        <ul>
          <Link to="/" className="link">
            Acasa
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
          {!user ? (
            <Link to="/auth" className="link">
              Autentificare
            </Link>
          ) : (
            <div className="link" onClick={()=> handleSignOut()}>Deconectare</div>
          )}
        </ul>
      </div>
    </div>
  );
};
export { Link };
