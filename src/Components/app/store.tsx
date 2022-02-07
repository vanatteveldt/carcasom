import { configureStore } from "@reduxjs/toolkit";
import currentPlayerReducer from "../currentPlayerSlice";
import historyReducer from "../HistorySlice";
import optionsReducer from "../ScoreOptions/OptionsSlice";

export const store = configureStore({
  reducer: {
    currentPlayer: currentPlayerReducer,
    history: historyReducer,
    options: optionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
