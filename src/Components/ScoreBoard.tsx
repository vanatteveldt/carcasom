import { Card, Grid } from "semantic-ui-react";
import * as React from "react";

interface ScoreBoardProps {
  /** Current scores */
  scores: { [player: string]: number };
  /** Name of the current player */
  current: string;
  /** Will be called when a player is clicked */
  onClick: (player: string) => void;
}

/**
 * Set up the score board
 */
export default function ScoreBoard({
  scores,
  current,
  onClick,
}: ScoreBoardProps) {
  return (
    <Grid columns={2} centered>
      {Object.keys(scores).map((name) => (
        <Grid.Column key={name}>
          <Score
            name={name}
            scores={scores}
            current={current}
            onClick={() => onClick(name)}
          />
        </Grid.Column>
      ))}
    </Grid>
  );
}

interface ScoreProps {
  name: string;
  scores: { [player: string]: number };
  current: string;
  onClick: () => void;
}

function Score({ name, scores, current, onClick }: ScoreProps) {
  console.log({ name, current });
  return (
    <Card
      style={{ backgroundColor: name === current ? "lightgreen" : null }}
      color={name === current ? "green" : null}
      onClick={() => onClick()}
    >
      <Card.Header>{name}</Card.Header>
      <Card.Content>{scores[name]}</Card.Content>
    </Card>
  );
}
