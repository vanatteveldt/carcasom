import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "../scoreSlice";
import currentPlayerReducer from "../currentPlayerSlice";

export const store = configureStore({
  reducer: {
    score: scoreReducer,
    currentPlayer: currentPlayerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
