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

type CardCommentsProps = {
  content: string;
  createdAt: string;
  user: TCurrentUser;
  score: number;
  cardId: number;
};

export const CardComments = ({
  content,
  createdAt,
  user,
  score,
  cardId,
}: CardCommentsProps) => {
  return (
    <Card sx={{ maxWidth: 1200, marginTop: 3 }} variant="outlined">
      <ScoreComponent cardId={cardId} score={score} />
      <CardHeader
        title={user.username}
        subheader={createdAt}
        avatar={<Avatar src={user.image.png} alt={user.username} />}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};
