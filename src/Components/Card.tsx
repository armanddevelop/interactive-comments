import { Card, Box, Avatar, TextField, Button } from "@mui/material";
import { useCardsContent, useCardComments } from "../Hooks";

export const CardAddComments = () => {
  const { currentUser } = useCardsContent();
  const { createComment, comment, setComment } = useCardComments();
  const { username, image } = currentUser;
  const handleClick = () => {
    createComment(comment);
    setComment("");
  };

  return (
    <Card sx={{ maxWidth: 1200, marginTop: 3 }} variant="outlined">
      <Box sx={{ p: 2, display: "flex" }}>
        <Avatar alt={username} sx={{ width: 60, height: 60 }} src={image.png} />
        <TextField
          placeholder="Add comments..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          multiline
          rows={4}
          color="secondary"
          sx={{ marginLeft: "15px", width: "70%" }}
        />
        <Button
          variant="contained"
          onClick={() => handleClick()}
          sx={{
            width: "12%",
            marginLeft: "20px",
            height: "50px",
            background: "#5D08B2",
          }}
        >
          SEND
        </Button>
      </Box>
    </Card>
  );
};
