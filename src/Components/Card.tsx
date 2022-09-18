import { useEffect } from "react";
import { Card, Box, Avatar, TextField, Button } from "@mui/material";
import { useCardsContent } from "../Hooks/useCardsContent";

export const CardAddComments = () => {
  const { getComments, currentUser } = useCardsContent();
  const { username, image } = currentUser;
  useEffect(() => {
    getComments();
  }, []);

  return (
    <Card sx={{ maxWidth: 1200, marginTop: 3 }} variant="outlined">
      <Box sx={{ p: 2, display: "flex" }}>
        <Avatar alt={username} sx={{ width: 60, height: 60 }} src={image.png} />
        <TextField
          placeholder="Add comments..."
          multiline
          rows={4}
          color="secondary"
          sx={{ marginLeft: "15px", width: "70%" }}
        />
        <Button
          variant="contained"
          color="secondary"
          sx={{ width: "12%", marginLeft: "20px", height: "50px" }}
        >
          SEND
        </Button>
      </Box>
    </Card>
  );
};
