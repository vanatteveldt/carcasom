import { Button, Grid, Icon } from "semantic-ui-react";

interface ScoreButtonsProps {
  scoring: { [type: string]: number[] };
  onClick: (type: string, value: number) => void;
}

export default function ScoreButtons({ scoring, onClick }: ScoreButtonsProps) {
  return (
    <Grid columns={3}>
      {Object.keys(scoring).map((type) => (
        <Grid.Column key={type}>
          <ScoreColumn type={type} values={scoring[type]} onClick={onClick} />
        </Grid.Column>
      ))}
    </Grid>
  );
}

const icons = {
  weg: "road",
  stad: "building",
  klooster: "warehouse",
};

interface ScoreColumnProps {
  type: string;
  values: number[];
  onClick: (type: string, value: number) => void;
}

function ScoreColumn({ type, values, onClick }: ScoreColumnProps) {
  return (
    <>
      <Icon name={icons[type]} size="huge" />
      <br />
      {values.map((value) => (
        <Button
          style={{ marginTop: "1em" }}
          onClick={() => onClick(type, value)}
        >
          {value}
        </Button>
      ))}
    </>
  );
}
