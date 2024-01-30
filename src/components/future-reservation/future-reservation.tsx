import React from "react";
import "./future-reservation.styles.scss";
import { ReservationData } from "../../models/reservation.model";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { Box, FormControl, FormLabel, Select, Text } from "@chakra-ui/react";
import { Input } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  deleteReservation,
  updateReservation,
} from "../../firebase/reservation/reservation.firebase.utils";
import { useAppDispatch } from "../../app/hooks";
import {
  deleteReservationFromState,
  updateReservationInState,
} from "../../features/reservation/reservation.slice";
import {
  LocalizationProvider,
  TimePicker,
  renderTimeViewClock,
} from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
interface Props {
  reservations: ReservationData[];
}

function FutureReservation({ reservations }: Props) {
  const [open, setOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);

  const [selectedReservationId, setSelectedReservationId] = React.useState("");
  const [editFormData, setEditFormData] = React.useState<ReservationData>({
    date: "",
    email: "",
    guests: 1,
    hour: "",
    id: "",
    name: "",
    phone: "",
  });
  const options = Array.from({ length: 10 }, (_, index) => index + 1);
  const dispatch = useAppDispatch();

  const handleEdit = (reservation: ReservationData) => {
    setEditOpen(true);
    setEditFormData(reservation);
  };

  const handleReservationUpdate = async () => {
    setEditOpen(false);
    await updateReservation(editFormData);
    dispatch(updateReservationInState(editFormData));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleReservationDeletion = async () => {
    await deleteReservation(selectedReservationId);
    dispatch(deleteReservationFromState(selectedReservationId));
    setOpen(false);
  };

  const handleDelete = (reservationId: string) => {
    setOpen(true);
    setSelectedReservationId(reservationId);
  };

  return (
    <div className="future-reservation-card">
      {reservations.length > 0 && (
        <div className="future-reservation-card-header">
          <Text fontSize="18px" fontWeight="bold" color="white">
            Nume
          </Text>
          <Text fontSize="18px" fontWeight="bold" color="white">
            Data
          </Text>

          <Text fontSize="18px" fontWeight="bold" color="white">
            Ora
          </Text>
          <Text fontSize="18px" fontWeight="bold" color="white">
            Număr de persoane
          </Text>
          <Box className="edit-delete-icons">
            <Text fontSize="18px" fontWeight="bold" color="white">
              Actiuni
            </Text>
          </Box>
        </div>
      )}
      <div className="future-reservation-card-list">
        {reservations.length === 0 ? (
          <div className="no-reservations-message">
            <Text fontSize="25px" fontWeight="bold" color="white">
              Rezervarile dumneavoastra vor aparea aici..
            </Text>
          </div>
        ) : (
          reservations.map((reservation, index) => (
            <div key={index} className="future-reservation-list-item">
              <Box className="reservation-details">
                <Text fontSize="18px" fontWeight={"bold"} color="#2b2a4c">
                  {reservation.name}
                </Text>
                <Text fontSize="18px" fontWeight={"bold"} color="#2b2a4c">
                  {reservation.date}
                </Text>

                <Text fontSize="18px" fontWeight={"bold"} color="#2b2a4c">
                  {reservation.hour}
                </Text>
                <Text fontSize="18px" fontWeight={"bold"} color="#2b2a4c">
                  {reservation.guests}
                </Text>
                <Box className="edit-delete-icons">
                  <EditIcon
                    boxSize={26}
                    paddingRight={16}
                    onClick={() => handleEdit(reservation)}
                  />
                  <DeleteIcon
                    boxSize={26}
                    onClick={() => handleDelete(reservation.id)}
                  />
                </Box>
              </Box>
            </div>
          ))
        )}
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Anulare rezervare"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Sunteti sigur ca doriti sa anulati rezervarea?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={() => setOpen(false)}>
              Nu
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleReservationDeletion()}
            >
              Da
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={editOpen}
          fullWidth
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            style={{
              backgroundColor: "#1F2544",
              color: "white",
              fontWeight: "bold",
            }}
            id="alert-dialog-title"
          >
            {"Ediatre rezervare"}
          </DialogTitle>
          <DialogContent style={{ backgroundColor: "#1F2544" }}>
            <DialogContentText id="alert-dialog-description">
              <form className="reservation-form">
                <FormControl mb={4} className="form-group">
                  <FormLabel>Nume</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={editFormData.name}
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
                        minDate={dayjs(editFormData.date, "DD/MM/YYYY")}
                        format="DD/MM/YYYY"
                        value={dayjs(editFormData.date, "DD/MM/YYYY")}
                        onChange={(e) =>
                          setEditFormData({
                            ...editFormData,
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
                        value={dayjs(editFormData.hour, "HH:mm")}
                        onChange={(e) =>
                          setEditFormData({
                            ...editFormData,
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
                    value={editFormData.guests}
                    onChange={(e) => handleChange(e)}
                    variant="outline"
                    colorScheme="warning"
                    style={{ width: "100%" }}
                  >
                    {options.map((number) => (
                      <option key={number} value={number}>
                        {number}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </form>
            </DialogContentText>
          </DialogContent>
          <DialogActions style={{ backgroundColor: "#1F2544" }}>
            <Button variant="outlined" onClick={() => setEditOpen(false)}>
              Anulare
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleReservationUpdate()}
            >
              Actualizare
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default FutureReservation;
