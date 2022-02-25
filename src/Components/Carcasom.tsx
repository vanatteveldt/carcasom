import { Segment } from "semantic-ui-react";
import { useAppSelector } from "./app/hooks";
import History from "./History";
import Menu from "./Menu";
import ScoreBoard from "./ScoreBoard";
import ScoreGrid from "./ScoreGrid";
import { selectFinalScoring } from "./ScoreOptions/OptionsSlice";

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
        <Menu />
      </Segment>

      <Segment>
        <ScoreGrid />
      </Segment>
      <History />
    </div>
  );
}
