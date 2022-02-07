import { Button, Grid, Icon } from "semantic-ui-react";
import { SemanticICONS } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { selectCurrentPlayer } from "./currentPlayerSlice";
import { addAction } from "./HistorySlice";

interface ScoreButtonsProps {
  scoring: { [type: string]: number[] };
}

export default function ScoreButtons({ scoring }: ScoreButtonsProps) {
  return (
    <Grid columns={3}>
      {Object.keys(scoring).map((type) => (
        <Grid.Column key={type}>
          <ScoreColumn type={type} values={scoring[type]} />
        </Grid.Column>
      ))}
    </Grid>
  );
}

export const type_icons: { [key: string]: SemanticICONS } = {
  weg: "road" as SemanticICONS,
  stad: "building" as SemanticICONS,
  klooster: "warehouse" as SemanticICONS,
};

interface ScoreColumnProps {
  type: string;
  values: number[];
}

function ScoreColumn({ type, values }: ScoreColumnProps) {
  const dispatch = useAppDispatch();
  const player = useAppSelector(selectCurrentPlayer);

  const showPopup = () => {
    const score = prompt("How many points?");
    if (score != null)
      dispatch(addAction({ player, type, score: parseInt(score) }));
  };

  return (
    <>
      <Icon name={type_icons[type]} size="huge" onClick={() => showPopup()} />
      <br />
      {values.map((score, i) => (
        <Button
          key={i}
          style={{ marginTop: "1em" }}
          onClick={() => dispatch(addAction({ player, type, score }))}
        >
          {score}
        </Button>
      ))}
    </>
  );
}
