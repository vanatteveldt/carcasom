import { Button, Grid, Label } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { selectCanUndo, selectLast, undo } from "./HistorySlice";

export default function Menu() {
  const dispatch = useAppDispatch();
  const canUndo = useAppSelector(selectCanUndo);
  const last = useAppSelector(selectLast);
  return (
    <>
      <Grid columns={2}>
        <Grid.Column>
          <Button disabled={!canUndo} onClick={() => dispatch(undo())}>
            Undo
          </Button>
        </Grid.Column>
        <Grid.Column>
          {last == null ? null : (
            <Label basic color={last.player.color as any}>
              {last.player.name} scores {last.score}
            </Label>
          )}
        </Grid.Column>
      </Grid>
    </>
  );
}
