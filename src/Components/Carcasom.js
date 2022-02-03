import { useState } from "react";
import ScoreBoard from "./ScoreBoard";
import ScoreButtons from "./ScoreButtons";

const users = ["Nel", "Wouter"];

export default function Carcasom() {
  const handleClick = (type, score) => {
    setScores((scores) => {
      console.log({ scores, current, type, score });
      const result = { ...scores };
      result[current] += score;
      return result;
    });
    console.log({ type, score });
  };
  const [scores, setScores] = useState(
    Object.fromEntries(users.map((name) => [name, 0]))
  );
  const [current, setCurrent] = useState(users[0]);
  return (
    <div>
      <ScoreBoard scores={scores} current={current} onClick={setCurrent} />
      <ScoreButtons
        type="road"
        values={[1, 2, 3, 4, 5, 6]}
        onClick={handleClick}
      />
    </div>
  );
}
