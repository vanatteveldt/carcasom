import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./app/store";

export interface Player {
  name: string;
  color: string;
}

type Players = [Player, Player];

const STORE_KEY = "carcasom_players";

function read_localstorage(): Players {
  const x = localStorage.getItem(STORE_KEY);
  if (x == null)
    return [
      { name: "Player 1", color: "green" },
      { name: "Player 2", color: "red" },
    ];
  const index = JSON.parse(x);
  return index;
}

function write_localstorage(players: Players): void {
  localStorage.setItem(STORE_KEY, JSON.stringify(players));
}

export const playersSlice = createSlice({
  name: "players",
  initialState: read_localstorage,
  reducers: {
    setPlayerName: (
      state,
      action: PayloadAction<{ index: number; name: string }>
    ) => {
      state[action.payload.index].name = action.payload.name;
      write_localstorage(state);
    },
  },
});

export const selectPlayers = (state: RootState): Players => state.players;

export const { setPlayerName } = playersSlice.actions;
