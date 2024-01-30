import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/authentication/user.slice";
import reservationReducer from "../features/reservation/reservation.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    reservation: reservationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
