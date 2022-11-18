import { createSlice } from "@reduxjs/toolkit";

const stopWatchSlice = createSlice({
  name: "stopWatch",
  initialState: {
    csvTable: [],
    watchState: false,
    watchConfig: { min: 0, sec: 0 },
  },
  reducers: {
    setCSVTable(state, { payload }) {
      state.csvTable = payload;
    },
    addCSVValue(state, { payload = { id: 1, ss: { min: 0, sec: 0 } } }) {
      state.csvTable = [...state.csvTable, payload];
    },
    setWatchConfig(state, { payload = { min: 0, sec: 0 } }) {
      state.watchConfig = { ...state.watchConfig, ...payload };
    },
    resetWatchConfig(state) {
      state.watchConfig = { min: 0, sec: 0 };
    },
    setWatchState(state, { payload = false }) {
      state.watchState = payload;
    },
  },
});

export const {
  setCSVTable,
  addCSVValue,
  setWatchConfig,
  resetWatchConfig,
  setWatchState,
} = stopWatchSlice.actions;

export default stopWatchSlice;
