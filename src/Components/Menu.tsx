import { Button, Checkbox, Label } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { selectCanUndo, selectLast, undo } from "./HistorySlice";
import { selectBattleMode, setBattleMode } from "./ScoreOptions/OptionsSlice";

export default function Menu() {
  const dispatch = useAppDispatch();
  const canUndo = useAppSelector(selectCanUndo);
  const last = useAppSelector(selectLast);
  const battlemode = useAppSelector(selectBattleMode);
  return (
    <>
      <div style={{ display: "flex", paddingTop: ".5em" }}>
        <div style={{ flex: "auto" }}>
          <Button disabled={!canUndo} onClick={() => dispatch(undo())}>
            Undo
          </Button>
        </div>
        <div style={{ flex: "auto" }}>
          {last == null ? null : (
            <Label basic color={last.player.color as any}>
              {last.player.name} scores {last.score}
            </Label>
          )}
        </div>
        <div style={{ flex: "auto" }}>
          {" "}
          <Checkbox
            checked={battlemode}
            onChange={(_, { checked }) =>
              dispatch(setBattleMode({ battlemode: checked }))
            }
            toggle
          />{" "}
          Battle mode
        </div>
      </div>
    </>
  );
}
