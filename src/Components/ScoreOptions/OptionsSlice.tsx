import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface OptionsState {
  finalscoring: boolean;
}

const initialState: OptionsState = { finalscoring: false };

export const optionsSlice = createSlice({
  name: "options",
  initialState: initialState,
  reducers: {
    setFinalScoring: (
      state,
      action: PayloadAction<{ finalscoring: boolean }>
    ) => {
      state.finalscoring = action.payload.finalscoring;
    },
  },
});

export const selectFinalScoring = (state: RootState): boolean =>
  state.options.finalscoring;

export const { setFinalScoring } = optionsSlice.actions;

export default optionsSlice.reducer;
