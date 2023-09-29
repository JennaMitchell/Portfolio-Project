import { createSlice } from "@reduxjs/toolkit";

type NavStoreStatesType = {
  navMenuActive: boolean;
  activePage: string;
};

const initialState: NavStoreStatesType = {
  navMenuActive: false,
  activePage: "home",
};

export const navStoreSlice = createSlice({
  name: "Portfolio Nav Store",
  initialState: initialState,
  reducers: {
    setNavMenuActive(state, { payload }) {
      state.navMenuActive = payload;
    },
    setActivePage(state, { payload }) {
      state.activePage = payload;
    },
  },
});

export const navStoreActions = navStoreSlice.actions;
