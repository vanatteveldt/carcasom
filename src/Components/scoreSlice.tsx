import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./app/store";

interface ScoreState {
  [player: string]: number;
}
const initialState: ScoreState = {
  Nel: 0,
  Wouter: 0,
};

export const scoreSlice = createSlice({
  name: "score",
  initialState: initialState,
  reducers: {
    addScore: (
      state,
      action: PayloadAction<{ player: string; score: number }>
    ) => {
      state[action.payload.player] += action.payload.score;
    },
  },
});

export const selectScore = (state: RootState): ScoreState => state.score;
export function selectUserScore(player: string) {
  return (state: RootState) => selectScore(state)[player];
}

export const selectPlayers = (state: RootState): string[] =>
  Object.keys(state.score);

export const { addScore } = scoreSlice.actions;

export default scoreSlice.reducer;
