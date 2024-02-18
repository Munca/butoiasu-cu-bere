import React from "react";
import SingIn from "../../components/sing-in/sing-in";
import SingUp from "../../components/sing-up/sing-up";
import "./singin-singup.scss";

function AuthenticationPage() {
  return (
    <div className="singin-singup">
      <div className="auth-container">
        <SingIn></SingIn>
        <SingUp></SingUp>
      </div>
    </div>
  );
}

export default AuthenticationPage;
