import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface LandingState {
  name: string;
}

const initialState: LandingState = {
  name: "ceva",
};

export const landingSlice = createSlice({
  name: "landing",
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { updateName } = landingSlice.actions;
export default landingSlice.reducer;
