import { Card, Grid, Header } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { selectPlayerScore } from "./HistorySlice";
import { Player, selectPlayers, setPlayerName } from "./PlayersSlice";

/**
 * Set up the score board
 */
export default function ScoreBoard() {
  const players = useAppSelector(selectPlayers);
  return (
    <Grid columns={2} centered>
      {[players[0], players[1]].map((player, index) => (
        <Grid.Column key={player.name}>
          <Score index={index} player={player} />
        </Grid.Column>
      ))}
    </Grid>
  );
}

interface ScoreProps {
  player: Player;
  index: number;
}

const COLORS: { [name: string]: string } = {
  red: "#faa",
  green: "lightgreen",
};

export function Score({ player, index }: ScoreProps) {
  const score = useAppSelector(selectPlayerScore(player));
  const dispatch = useAppDispatch();
  function changeName() {
    const newname = window.prompt(`Player ${index} name`, player.name);
    if (newname != null) dispatch(setPlayerName({ index, name: newname }));
  }
  return (
    <Card
      style={{ backgroundColor: `${COLORS[player.color]}` }}
      onClick={changeName}
    >
      <Card.Header style={{ textAlign: "center" }}>
        <Header>{player.name}</Header>
      </Card.Header>
      <Card.Content style={{ textAlign: "center" }}>
        <Header style={{ fontSize: "200%" }}>{score}</Header>
      </Card.Content>
    </Card>
  );
}
