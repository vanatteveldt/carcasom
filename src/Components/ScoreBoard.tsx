import { Card, Grid } from "semantic-ui-react";
import * as React from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { selectCurrentPlayer, setCurrentPlayer } from "./currentPlayerSlice";
import { selectPlayerScore } from "./HistorySlice";

/**
 * Set up the score board
 */
export default function ScoreBoard() {
  const players = ["Wouter", "Nel"];
  return (
    <Grid columns={2} centered>
      {players.map((name) => (
        <Grid.Column key={name}>
          <Score name={name} />
        </Grid.Column>
      ))}
    </Grid>
  );
}

interface ScoreProps {
  name: string;
}

function Score({ name }: ScoreProps) {
  const score = useAppSelector(selectPlayerScore(name));
  const currentPlayer = useAppSelector(selectCurrentPlayer);
  const dispatch = useAppDispatch();

  return (
    <Card
      style={{ backgroundColor: name === currentPlayer ? "lightgreen" : null }}
      color={name === currentPlayer ? "green" : null}
      onClick={() => dispatch(setCurrentPlayer({ player: name }))}
    >
      <Card.Header>{name}</Card.Header>
      <Card.Content>{score}</Card.Content>
    </Card>
  );
}
