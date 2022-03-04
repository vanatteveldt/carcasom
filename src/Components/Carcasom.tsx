import { Segment } from "semantic-ui-react";
import { useAppSelector } from "./app/hooks";
import BattleGrid from "./BattleGrid";
import History from "./History";
import Menu from "./Menu";
import ScoreBoard from "./ScoreBoard";
import ScoreGrid from "./ScoreGrid";
import { selectBattleMode } from "./ScoreOptions/OptionsSlice";

export default function Carcasom() {
  const battlemode = useAppSelector(selectBattleMode);
  if (battlemode)
    return (
      <>
        <Segment>
          <BattleGrid playerIndex={0} />
        </Segment>

        <Segment>
          <ScoreBoard />
          <Menu />
        </Segment>

        <Segment>
          <BattleGrid playerIndex={1} />
        </Segment>
      </>
    );
  else
    return (
      <>
        <Segment>
          <ScoreBoard />
          <Menu />
        </Segment>

        <Segment>
          <ScoreGrid />
        </Segment>
        <History />
      </>
    );
}
