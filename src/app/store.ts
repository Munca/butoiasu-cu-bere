import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import landingReducer from "../features/landing/landingSlice";

export const store = configureStore({
  reducer: {
    landing: landingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
