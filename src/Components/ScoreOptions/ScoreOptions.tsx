import { Checkbox } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectFinalScoring, setFinalScoring } from "./OptionsSlice";

export default function ScoreOptions() {
  const value = useAppSelector(selectFinalScoring);
  const dispatch = useAppDispatch();
  return (
    <Checkbox
      label="Final scoring"
      checked={value}
      toggle
      onChange={(_e, data) =>
        dispatch(setFinalScoring({ finalscoring: data.checked }))
      }
    />
  );
}
