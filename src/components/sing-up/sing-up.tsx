import React, { useState } from "react";
import "./sing-up.scss";
import { DefaultRegisterValues } from "../../models/auth.models";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../firebase/firebase.utils";
import { useNavigate } from "react-router";

const SignUp = () => {
  const defaultFormFields: DefaultRegisterValues = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const navigate = useNavigate();

  const [formFields, setFormFields] =
    useState<DefaultRegisterValues>(defaultFormFields);
  //destructuring
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const user = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, displayName);
      navigate("/");
      resetFormFields();
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  return (
    <div className="sign-up">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>Înregistrare</h2>
        <label>
          Email:
          <input
            type="email"
            required
            name="email"
            value={email}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            required
            name="displayName"
            value={displayName}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          Parolă:
          <input
            required
            type="password"
            name="password"
            value={password}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label>
          Confirmare Parolă:
          <input
            type="password"
            value={confirmPassword}
            required
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button type="submit">Înregistrare</button>
      </form>
    </div>
  );
};

export default SignUp;
