import React, { useState } from "react";
import "./sing-in.scss";
import { signInUserWithEmailAndPassword } from "../../../firebase/firebase.utils";
import { useNavigate } from "react-router";
interface SignInValues {
  email: string;
  password: string;
}

const SignIn = () => {
  const defaultFormValues: SignInValues = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState<SignInValues>(defaultFormValues);
  const { email, password } = formFields;
  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormValues);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signInUserWithEmailAndPassword(email, password);
      resetFormFields();
      navigate('/')
    } catch (err) {
      switch (err) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(err);
      }
    }
  };

  return (
    <div className="sign-in">
      <h2>Autentificare</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          Parolă:
          <input
            type="password"
            value={password}
            name="password"
            required
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button type="submit">Autentificare</button>
      </form>
    </div>
  );
};

export default SignIn;
