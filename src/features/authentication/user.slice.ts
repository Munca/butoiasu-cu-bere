import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/user.model";
interface LandingState {
  currentUser: User | null
}

const initialState: LandingState = {
  currentUser: null
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
