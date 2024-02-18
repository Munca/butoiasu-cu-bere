import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Menu } from "../../models/menu.model";

interface MenuState {
  menu: Menu[] | [];
}

const initialState: MenuState = {
  menu: [],
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    fetchMenu: (state, action: PayloadAction<Menu[]>) => {
      state.menu = action.payload;
    },
  },
});

export const { fetchMenu } = menuSlice.actions;
export default menuSlice.reducer;
