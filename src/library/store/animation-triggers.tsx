import { createSlice } from "@reduxjs/toolkit";

type AnimaationStoreStatesType = {
  firstRenderMouseEnteredViewportTrigger: boolean;
  firstRenderAnimationTimeStamp: number;
  firstAnimationActiveStep: number;
};

const initialState: AnimaationStoreStatesType = {
  firstRenderMouseEnteredViewportTrigger: false,
  firstRenderAnimationTimeStamp: 0,
  firstAnimationActiveStep: 0,
};

export const animationStoreSlice = createSlice({
  name: "Portfolio Animations Store",
  initialState: initialState,
  reducers: {
    setFirstRenderMouseEnteredViewportTrigger(state, { payload }) {
      state.firstRenderMouseEnteredViewportTrigger = payload;
    },
    setFirstRenderAnimationTimeStamp(state, { payload }) {
      state.firstRenderAnimationTimeStamp = payload;
    },
    setFirstAnimationActiveStep(state, { payload }) {
      state.firstAnimationActiveStep = payload;
    },
  },
});

export const animationStoreActions = animationStoreSlice.actions;
