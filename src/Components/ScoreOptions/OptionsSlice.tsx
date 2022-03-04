import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface OptionsState {
  battlemode: boolean;
}

const initialState: OptionsState = { battlemode: false };

export const optionsSlice = createSlice({
  name: "options",
  initialState: initialState,
  reducers: {
    setBattleMode: (state, action: PayloadAction<{ battlemode: boolean }>) => {
      state.battlemode = action.payload.battlemode;
    },
  },
});

export const selectBattleMode = (state: RootState): boolean =>
  state.options.battlemode;

export const { setBattleMode } = optionsSlice.actions;

export default optionsSlice.reducer;
