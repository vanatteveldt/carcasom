import { Icon, List } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  jumpToPast,
  jumpToFuture,
  selectHistory,
  Action,
} from "./HistorySlice";

export default function History() {
  const history = useAppSelector(selectHistory);
  const dispatch = useAppDispatch();
  const past_indices = Array.from(history.past.keys()).reverse().slice(0, 5);
  const future_indices = Array.from(history.future.keys()).reverse();
  const item_content = (action: Action) => (
    <>
      {action.player.name}&nbsp;
      {action.score}
    </>
  );
  return (
    <List divided relaxed>
      {future_indices.map((i) => (
        <List.Item key={i}>
          <List.Icon
            name="redo"
            size="large"
            onClick={() => dispatch(jumpToFuture({ index: i }))}
          />
          <List.Content style={{ color: "grey" }}>
            {item_content(history.future[i])}
          </List.Content>
        </List.Item>
      ))}
      {past_indices.map((i) => (
        <List.Item key={i}>
          <List.Icon
            name="undo"
            size="large"
            onClick={() => dispatch(jumpToPast({ index: i }))}
          />
          <List.Content>{item_content(history.past[i])}</List.Content>
        </List.Item>
      ))}
    </List>
  );
}
