import { useState } from "react";
import ScoreBoard from "./ScoreBoard";
import ScoreButtons from "./ScoreButtons";

const users: string[] = ["Nel", "Wouter"];

const scoring = {
  weg: [1, 2, 3, 4, 5, 6, 7, 8],
  stad: [2, 4, 6, 8, 10, 12, 14, 16],
  klooster: [9],
};

export default function Carcasom() {
  const handleClick = (type: string, score: number) => {
    setScores((scores) => {
      console.log({ scores, current, type, score });
      const result = { ...scores };
      result[current] += score;
      return result;
    });
    console.log({ type, score });
  };

  const [scores, setScores] = useState<{ [player: string]: number }>(
    Object.fromEntries(users.map((name) => [name, 0]))
  );

  const [current, setCurrent] = useState<string>(users[0]);
  return (
    <div>
      <ScoreBoard scores={scores} current={current} onClick={setCurrent} />
      <ScoreButtons scoring={scoring} onClick={handleClick} />
    </div>
  );
}
