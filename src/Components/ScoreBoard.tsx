import { Card, Grid, Header } from "semantic-ui-react";
import * as React from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { selectCurrentPlayer, setCurrentPlayer } from "./currentPlayerSlice";
import { selectPlayerScore } from "./HistorySlice";
import { Player, selectPlayers } from "./PlayersSlice";

/**
 * Set up the score board
 */
export default function ScoreBoard() {
  const players = useAppSelector(selectPlayers);
  return (
    <Grid columns={2} centered>
      {[players[0], players[1]].map((player) => (
        <Grid.Column key={player.name}>
          <Score player={player} />
        </Grid.Column>
      ))}
    </Grid>
  );
}

interface ScoreProps {
  player: Player;
}

const COLORS: { [name: string]: string } = {
  red: "#faa",
  green: "lightgreen",
};

export function Score({ player }: ScoreProps) {
  const score = useAppSelector(selectPlayerScore(player));
  const currentPlayer = useAppSelector(selectCurrentPlayer);
  const dispatch = useAppDispatch();
  return (
    <Card style={{ backgroundColor: `${COLORS[player.color]}` }}>
      <Card.Header style={{ textAlign: "center" }}>
        <Header>{player.name}</Header>
      </Card.Header>
      <Card.Content style={{ textAlign: "center" }}>
        <Header style={{ fontSize: "200%" }}>{score}</Header>
      </Card.Content>
    </Card>
  );
}
