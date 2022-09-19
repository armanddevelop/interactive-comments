import { Button, ButtonGroup, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCardsContent } from "../Hooks/useCardsContent";

type ScoreComponentProps = {
  score: number;
  cardId: number;
};

export const ScoreComponent = ({ score, cardId }: ScoreComponentProps) => {
  const { changeScore } = useCardsContent();
  const handleClick = (id: number, vote: number) => {
    const votes = {
      id,
      vote,
    };
    changeScore(votes);
  };
  return (
    <ButtonGroup orientation="vertical" variant="outlined">
      <Button onClick={() => handleClick(cardId, 1)}>
        <AddIcon color="disabled" />
      </Button>
      <Typography variant="body2" color="text.secondary">
        {score}
      </Typography>
      <Button
        onClick={() => handleClick(cardId, -1)}
        disabled={score === 0 ? true : false}
      >
        <RemoveIcon color="disabled" />
      </Button>
    </ButtonGroup>
  );
};
