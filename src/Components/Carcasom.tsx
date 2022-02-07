import { Checkbox, Segment } from "semantic-ui-react";
import { useAppSelector } from "./app/hooks";
import History from "./History";
import ScoreBoard from "./ScoreBoard";
import ScoreButtons from "./ScoreButtons";
import { selectFinalScoring } from "./ScoreOptions/OptionsSlice";
import ScoreOptions from "./ScoreOptions/ScoreOptions";

const scoring = {
  weg: [1, 2, 3, 4, 5, 6, 7, 8],
  stad: [2, 4, 6, 8, 10, 12, 14, 16],
  klooster: [9],
};

const final_scoring = {
  weg: [1, 2, 3, 4, 5, 6, 7, 8],
  stad: [1, 2, 3, 4, 5, 6, 7, 8],
  klooster: [5, 6, 7, 8, 9],
};

export default function Carcasom() {
  const finalscoring = useAppSelector(selectFinalScoring);
  return (
    <div>
      <Segment>
        <ScoreBoard />
        <br />
        <ScoreOptions />
      </Segment>

      <Segment>
        <ScoreButtons scoring={finalscoring ? final_scoring : scoring} />
      </Segment>
      <History />
    </div>
  );
}
