import History from "./History";
import ScoreBoard from "./ScoreBoard";
import ScoreButtons from "./ScoreButtons";

const scoring = {
  weg: [1, 2, 3, 4, 5, 6, 7, 8],
  stad: [2, 4, 6, 8, 10, 12, 14, 16],
  klooster: [9],
};

export default function Carcasom() {
  return (
    <div>
      <ScoreBoard />
      <ScoreButtons scoring={scoring} />
      <History />
    </div>
  );
}
