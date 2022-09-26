import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
} from "@mui/material";
import { repliesObj, TCurrentUser } from "../../types/types";
import { ScoreComponent } from "./ScoreComponent";
import { MenuButtons } from "./MenuButtons";
import { ModalComments } from "./Modal";

type CardCommentsProps = {
  content: string;
  createdAt: string;
  user: TCurrentUser;
  score: number;
  cardId: string;
  replies: Array<repliesObj>;
};

export const CardComments = ({
  content,
  createdAt,
  user,
  score,
  cardId,
  replies,
}: CardCommentsProps) => {
  return (
    <>
      <ModalComments cardId={cardId} typeComment={"comment"} />
      <Card
        className="card-comments"
        sx={{ maxWidth: 1200, marginTop: 3, display: "flex" }}
        variant="outlined"
      >
        <ScoreComponent cardId={cardId} score={score} typeComment={"comment"} />
        <Box sx={{ display: "inline-block" }}>
          <CardHeader
            title={user.username}
            subheader={createdAt}
            avatar={<Avatar src={user.image.png} alt={user.username} />}
            action={<MenuButtons username={user.username} />}
          />
          <CardContent>
            <Typography variant="body2">{content}</Typography>
          </CardContent>
        </Box>
      </Card>
      {replies.map(({ id, content, createdAt, score, user }) => {
        return (
          <div key={id}>
            <ModalComments cardId={id} typeComment={"reply"} />
            <Card
              className="card-comments"
              sx={{ maxWidth: 1200, marginTop: 3, display: "flex" }}
              variant="outlined"
            >
              <ScoreComponent cardId={id} score={score} typeComment={"reply"} />
              <Box sx={{ display: "inline-block" }}>
                <CardHeader
                  title={user.username}
                  subheader={createdAt}
                  avatar={<Avatar src={user.image.png} alt={user.username} />}
                  action={<MenuButtons username={user.username} />}
                />
                <CardContent>
                  <Typography variant="body2">{content}</Typography>
                </CardContent>
              </Box>
            </Card>
          </div>
        );
      })}
    </>
  );
};
