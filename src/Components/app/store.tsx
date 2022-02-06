import { configureStore } from "@reduxjs/toolkit";
import currentPlayerReducer from "../currentPlayerSlice";
import historyReducer from "../HistorySlice";

export const store = configureStore({
  reducer: {
    currentPlayer: currentPlayerReducer,
    history: historyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
