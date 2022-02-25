import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./app/store";

export interface Player {
  name: string;
  color: string;
}

interface Players {
  0: Player;
  1: Player;
}

const initialData: Players = [
  { name: "Suzan", color: "green" },
  { name: "Nel", color: "red" },
];

export const playersSlice = createSlice({
  name: "players",
  initialState: initialData,
  reducers: {},
});

export const selectPlayers = (state: RootState): Players => state.players;

//export const { setPlayers } = playersSlice.actions;
