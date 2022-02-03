import { Card, Grid } from "semantic-ui-react";

export default function ScoreBoard({ scores, current, onClick }) {
  return (
    <Grid centered>
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

function Score({ name, scores, current, onClick }) {
  console.log({ name, current });
  return (
    <Card
      style={{ backgroundColor: name === current ? "lightgreen" : null }}
      color={name === current ? "green" : null}
      onClick={onClick}
    >
      <Card.Header>{name}</Card.Header>
      <Card.Content>{scores[name]}</Card.Content>
    </Card>
  );
}
