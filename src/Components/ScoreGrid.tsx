import { Button, Grid } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { addAction } from "./HistorySlice";
import { selectPlayers } from "./PlayersSlice";
import "./score.css";
export default function ScoreGrid({}) {
  const players = useAppSelector(selectPlayers);
  const dispatch = useAppDispatch();
  console.log(players);
  return (
    <div className="scoregrid">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <div className="scorerow" key={i}>
          {[players[0], players[1]].map((player) => (
            <>
              {[0, 1].map((mult) => {
                const score = i * 2 + mult - 1;
                return (
                  <div className="scoreCol" key={`${player.name}-${score}`}>
                    <Button
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
                  </div>
                );
              })}{" "}
              <div className="separator"></div>
            </>
          ))}
        </div>
      ))}
    </div>
  );
}
