import React from "react";
import "./header.component.scss";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { signOutUser } from "../../firebase/firebase.utils";
import { setCurrentUser } from "../../features/authentication/user.slice";
import InfoTop from "../info-top/info-top.component";
import { resetReservation } from "../../features/reservation/reservation.slice";

export const Header = () => {
  const user = useAppSelector((state) => state.user.currentUser);
  const dispatch = useAppDispatch();

  const handleSignOut = async () => {
    await signOutUser();
    dispatch(setCurrentUser(null));
    dispatch(resetReservation());
  };
  return (
    <div className="header-wrapper">
      <InfoTop />
      <div className="navbar">
        <Link to="/" className="title link-home">
          BUTOIASU' CU BERE
        </Link>
        <ul>
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
            <div className="link" onClick={() => handleSignOut()}>
              Deconectare
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};
