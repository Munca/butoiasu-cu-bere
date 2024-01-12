import React, { useState } from "react";
import "./reservation.scss";
import TextField from "@mui/material/TextField";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aici poți adăuga logica pentru trimiterea datelor către server sau gestionarea lor în alt mod
    console.log("Formularul a fost trimis:", formData);
  };

  return (
    <div>
      <div className="reservationPage">
        <div className="infoPagina">
          <p>
            Acasa&nbsp;{">"}
            <span>{">"}&nbsp;Rezervare</span>
          </p>
        </div>

        <form className="reservation-form" onSubmit={handleSubmit}>
          {/* <label>
            Nume:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label> */}
           <TextField
            className="test"
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e)}
            variant="standard"
            color="warning"
            label="Nume"
            required
            fullWidth
          />
          <TextField
            className="test"
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
            variant="standard"
            color="warning"
            label="Email"
            required
            fullWidth
          />

          <TextField
            className="test"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={(e) => handleChange(e)}
            variant="standard"
            color="warning"
            label="Telefon"
            required
            fullWidth
          />

          <TextField
            className="test"
            type="date"
            name="date"
            value={formData.date}
            onChange={(e) => handleChange(e)}
            variant="standard"
            color="warning"
            label="Dată"
            required
            fullWidth
          />

          <TextField
            className="test"
            type="time"
            name="time"
            value={formData.time}
            onChange={(e) => handleChange(e)}
            variant="standard"
            color="warning"
            label="Ora"
            required
            fullWidth
          />
          <label>
            Număr de persoane:
            <select
              name="guests"
              value={formData.guests}
              onChange={(e) => handleChange}
            >
              {[...Array(10)].map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </label>
          <button type="submit">Rezervă acum</button>
        </form>
        {/* extract in another component  */}
        <div className="footerRezervation">
          <div className="footerRezervation-item">
            <p>Sunati Acum: 074 592 4437 - informatii</p>
          </div>
          <div className="footerRezervation-item">
            <p>Orar: intre 9:00-00:00</p>
          </div>
          <div className="footerRezervation-item">
            <p>Rezervari: 074 592 3346 - intre 9:00-21:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
