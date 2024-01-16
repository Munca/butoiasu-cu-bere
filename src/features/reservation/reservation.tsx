import React, { useState } from "react";
import "./reservation.scss";
import TextField from "@mui/material/TextField";
import { createReservation, getReservations } from "../../firebase/reservation/reservation.firebase.utils";
import { ReservationData } from "../../models/reservation.model";
import { useAppSelector } from "../../app/hooks";
import { Button } from "@mui/material";

const Reservation = () => {
const defaultFormFields: ReservationData = {
  id: "",
    name: "",
    email: "",
    phone: "",
    date: "",
    hour: "",
    guests: 1,
}
  const [formData, setFormData] = useState<ReservationData>(defaultFormFields);

  const currentUser = useAppSelector((state)=> state.user.currentUser)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(currentUser?.id)
    await createReservation(formData, currentUser?.id );
    setFormData(defaultFormFields)
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
            type="hour"
            name="hour"
            value={formData.hour}
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
                <Button onClick={()=> getReservations(currentUser?.id || "")}>Reservare</Button>
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
