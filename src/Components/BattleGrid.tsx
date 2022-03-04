import { Button, Grid } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { addAction } from "./HistorySlice";
import { selectPlayers } from "./PlayersSlice";
import "./score.css";
interface BattleGridProps {
  playerIndex: number;
}
export default function BattleGrid({ playerIndex }: BattleGridProps) {
  const player = useAppSelector(selectPlayers)[playerIndex];
  const dispatch = useAppDispatch();
  return (
    <Grid columns={5}>
      {[1, 2, 3, 4].map((row) => (
        <Grid.Row>
          {[1, 2, 3, 4, 5].map((col) => {
            let score = (row - 1) * 5 + col;
            if (playerIndex === 1) score = 21 - score;
            return (
              <Grid.Column>
                <Button
                  className={playerIndex === 1 ? "rotated" : ""}
                  color={player.color as any}
                  onClick={() =>
                    dispatch(
                      addAction({
                        player: player,
                        score: score,
                        type: "",
                      })
                    )
                  }
                >
                  {score}
                </Button>
              </Grid.Column>
            );
          })}
        </Grid.Row>
      ))}
    </Grid>
  );
}
