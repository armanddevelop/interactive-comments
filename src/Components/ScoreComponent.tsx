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
    <ButtonGroup
      className="scorecomponents__score-button-group"
      orientation="vertical"
      variant="text"
      sx={{
        marginLeft: "20px",
        height: "100px",
      }}
    >
      <Button
        size="small"
        onClick={() => handleClick(cardId, 1)}
        variant="outlined"
      >
        <AddIcon color="disabled" />
      </Button>
      <Typography
        variant="body2"
        color="primary"
        align="center"
        sx={{
          fontSize: "18px",
          margin: "5px",
        }}
      >
        {score}
      </Typography>
      <Button
        size="small"
        variant="outlined"
        onClick={() => handleClick(cardId, -1)}
        disabled={score === 0 ? true : false}
      >
        <RemoveIcon color="disabled" />
      </Button>
    </ButtonGroup>
  );
};
