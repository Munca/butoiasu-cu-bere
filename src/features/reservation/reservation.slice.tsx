import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReservationData } from "../../models/reservation.model";
interface LandingState {
  reservations: ReservationData[] | [];
}

const initialState: LandingState = {
  reservations: [],
};

export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    fetchReservations: (state, action: PayloadAction<ReservationData[]>) => {
      state.reservations = action.payload;
    },
    addReservationToState: (state, action: PayloadAction<ReservationData>) => {
      state.reservations = [...state.reservations, action.payload];
    },
    deleteReservationFromState: (state, action: PayloadAction<string>) => {
      state.reservations = state.reservations.filter(
        (reservation) => reservation.id !== action.payload
      );
    },
    updateReservationInState: (
      state,
      action: PayloadAction<ReservationData>
    ) => {
      state.reservations = state.reservations.map((reservation) =>
        reservation.id === action.payload.id ? action.payload : reservation
      );
    },
  },
});

export const {
  addReservationToState,
  deleteReservationFromState,
  fetchReservations,
  updateReservationInState,
} = reservationSlice.actions;
export default reservationSlice.reducer;
