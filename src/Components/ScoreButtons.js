import { Button, Card, Grid } from "semantic-ui-react";

export default function ScoreButtons({ type, values, onClick }) {
  console.log(values.length + 1);
  return (
    <Grid>
      <Grid.Column>{type}</Grid.Column>
      {values.map((value) => (
        <Grid.Column key={value}>
          <Button onClick={() => onClick(type, value)}>{value}</Button>
        </Grid.Column>
      ))}
    </Grid>
  );
}
