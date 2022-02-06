import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./app/store";

export interface Action {
  player: string;
  type: string;
  score: number;
}

interface HistoryState {
  past: Action[];
  future: Action[];
}

const initialState: HistoryState = { past: [], future: [] };

export const historySlice = createSlice({
  name: "history",
  initialState: initialState,
  reducers: {
    addAction: (state, action: PayloadAction<Action>) => {
      state.past.push(action.payload);
      state.future = [];
    },
    jumpToPast: (state, action: PayloadAction<{ index: number }>) => {
      if (action.payload.index > state.past.length) throw new Error("!");
      state.future = state.past
        .slice(action.payload.index)
        .concat(state.future);
      state.past = state.past.slice(0, action.payload.index);
    },
    jumpToFuture: (state, action: PayloadAction<{ index: number }>) => {
      state.past = state.past.concat(
        state.future.slice(0, action.payload.index + 1)
      );
      state.future = state.future.slice(action.payload.index + 1);
    },
  },
});

export const selectHistory = (state: RootState): HistoryState => state.history;
export const selectPlayerScore =
  (player: string) =>
  (state: RootState): number =>
    state.history.past
      .filter((action) => action.player === player)
      .reduce((sum, action) => sum + action.score, 0);

export const { addAction, jumpToPast, jumpToFuture } = historySlice.actions;

export default historySlice.reducer;
