import React, { useEffect, useState } from "react";
import "./reservation.scss";
import emailjs from "@emailjs/browser";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import { v4 as uuid } from "uuid";
import { Button, Select, FormControl, FormLabel, Box } from "@chakra-ui/react";
import {
  createReservation,
  getReservations,
} from "../../firebase/reservation/reservation.firebase.utils";
import dayjs from "dayjs";
import { ReservationData } from "../../models/reservation.model";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import FutureReservation from "../../components/future-reservation/future-reservation";
import { addReservationToState, fetchReservations } from "./reservation.slice";
import { Input } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from "react-router";

const Reservation = () => {
  const defaultFormFields: ReservationData = {
    id: "",
    name: "",
    email: "",
    phone: "",
    date: "",
    hour: "",
    guests: 1,
  };
  const [formData, setFormData] = useState<ReservationData>(defaultFormFields);
  const dispatch = useAppDispatch();
  const reservations = useAppSelector(
    (state) => state.reservation.reservations
  );
  const generatedId = uuid();
  const options = Array.from({ length: 10 }, (_, index) => index + 1);
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const templateParams = {
    to_email: currentUser && currentUser?.email,
    to_name: formData.name,
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    date: formData.date,
    hour: formData.hour,
    guests: formData.guests,
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentUser?.id) {
      try {
        await createReservation(
          { ...formData, id: generatedId },
          currentUser?.id
        );
        dispatch(addReservationToState({ ...formData, id: generatedId }));
        await emailjs.send(
          "service_ywcywjn",
          "template_ro0q3ij",
          templateParams,
          "Lh6Pn5n2D9d-fQAJP"
        );
      } catch (e) {
        console.log(e);
      }
    } else{
      navigate("/auth")
    }

    setFormData(defaultFormFields);
  };
  const fetchUserReservations = async () => {
    try {
      if (!currentUser?.id) return;
      const reservations = await getReservations(currentUser.id);
      dispatch(fetchReservations(reservations));
    } catch (error) {
      
      console.error("Error fetching reservations:", error);
    }
  };

  useEffect(() => {
    fetchUserReservations();
  }, [currentUser, dispatch]);

  return (
    <Box>
      <Box className="reservationPage">
        <div className="reservation-body">
          <form className="reservation-form" onSubmit={handleSubmit}>
            <FormControl mb={4} className="form-group">
              <FormLabel>Nume</FormLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => handleChange(e)}
                fullWidth
                required
              />
            </FormControl>
            <FormControl mb={4} className="form-group">
              <FormLabel>Telefon</FormLabel>
              <Input
                type="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) => handleChange(e)}
                fullWidth
                required
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Data rezervarii</FormLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    className="time-picker"
                    minDate={dayjs()}
                    format="DD/MM/YYYY"
                    value={dayjs(formData.date)}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        date: dayjs(e).format("DD/MM/YYYY"),
                      })
                    }
                  />
                </DemoContainer>
              </LocalizationProvider>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Ora</FormLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["TimePicker"]}>
                  <TimePicker
                    value={formData.hour}
                    format="HH:mm"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hour: dayjs(e).format("HH:mm"),
                      })
                    }
                    viewRenderers={{
                      hours: renderTimeViewClock,
                      minutes: renderTimeViewClock,
                      seconds: renderTimeViewClock,
                    }}
                    className="time-picker"
                  />
                </DemoContainer>
              </LocalizationProvider>
            </FormControl>
            <FormControl mb={4} className="form-group">
              <FormLabel>Număr de persoane</FormLabel>
              <Select
                name="guests"
                className="select"
                value={formData.guests}
                onChange={(e) => handleChange(e)}
                variant="outline"
                colorScheme="warning"
                style={{ width: "100%" }}
                required
              >
                {options.map((number) => (
                  <option key={number} value={number}>
                    {number}
                  </option>
                ))}
              </Select>
            </FormControl>
            <Button className="reservation-button" type="submit">
              Rezervă acum
            </Button>
          </form>
          <FutureReservation reservations={reservations}></FutureReservation>
        </div>
      </Box>
    </Box>
  );
};

export default Reservation;
