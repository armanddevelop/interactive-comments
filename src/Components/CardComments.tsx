import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
} from "@mui/material";

import { TCurrentUser } from "../../types/types";
import { ScoreComponent } from "./ScoreComponent";
import { DeleteButton } from "./DeleteButton";

type CardCommentsProps = {
  content: string;
  createdAt: string;
  user: TCurrentUser;
  score: number;
  cardId: string;
};

export const CardComments = ({
  content,
  createdAt,
  user,
  score,
  cardId,
}: CardCommentsProps) => {
  return (
    <Card
      className="card-comments"
      sx={{ maxWidth: 1200, marginTop: 3, display: "flex" }}
      variant="outlined"
    >
      <ScoreComponent cardId={cardId} score={score} />
      <Box sx={{ display: "inline-block" }}>
        <CardHeader
          title={user.username}
          subheader={createdAt}
          avatar={<Avatar src={user.image.png} alt={user.username} />}
          action={<DeleteButton username={user.username} />}
        />
        <CardContent>
          <Typography variant="body2">{content}</Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
