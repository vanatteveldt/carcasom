import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./app/store";

interface CurrentPlayerState {
  player: string;
}
const initialState: CurrentPlayerState = { player: "Wouter" };

export const currentPlayerSlice = createSlice({
  name: "currentPlayer",
  initialState: initialState,
  reducers: {
    setCurrentPlayer: (state, action: PayloadAction<{ player: string }>) => {
      state.player = action.payload.player;
    },
  },
});

export const selectCurrentPlayer = (state: RootState): string =>
  state.currentPlayer.player;

export const { setCurrentPlayer } = currentPlayerSlice.actions;

export default currentPlayerSlice.reducer;
