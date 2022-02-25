import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./app/store";
import { Player } from "./PlayersSlice";

export interface Action {
  player: Player;
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
    undo: (state, action: PayloadAction) => {
      if (state.past.length == 0) return;
      const index = state.past.length - 1;
      console.log(index);
      state.future = state.past.slice(index).concat(state.future);
      state.past = state.past.slice(0, index);
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
export const selectCanUndo = (state: RootState): boolean =>
  state.history.past.length > 0;
export const selectLast = (state: RootState): Action =>
  state.history.past.length == 0
    ? undefined
    : state.history.past[state.history.past.length - 1];

export const selectHistory = (state: RootState): HistoryState => state.history;
export const selectPlayerScore =
  (player: Player) =>
  (state: RootState): number =>
    state.history.past
      .filter((action) => action.player === player)
      .reduce((sum, action) => sum + action.score, 0);

export const { addAction, jumpToPast, jumpToFuture, undo } =
  historySlice.actions;

export default historySlice.reducer;
