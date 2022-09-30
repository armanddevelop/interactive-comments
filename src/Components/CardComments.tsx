import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { repliesObj, TCurrentUser } from "../../types/types";
import { ScoreComponent } from "./ScoreComponent";
import { MenuButtons } from "./MenuButtons";
import { ModalComments } from "./Modal";
import { CardAddComments } from "./Card";
import { CardShowContent } from "./CardShowContent";

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
  const { uiEvents, comments } = useSelector((state: any) => state);
  const { commentId } = comments;
  const { isReplyOpen, editComment } = uiEvents;
  return (
    <>
      <ModalComments typeComment={"comment"} />
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
            action={<MenuButtons cardId={cardId} username={user.username} />}
          />
          <CardContent>
            <CardShowContent
              content={content}
              isEditComment={editComment}
              commentId={commentId}
              cardId={cardId}
              buttonName="UPDATE"
              typeContent="comment"
            />
          </CardContent>
        </Box>
      </Card>
      {isReplyOpen && cardId === commentId && (
        <CardAddComments buttonName={"REPLY"} />
      )}
      {replies.map(({ id, content, createdAt, score, user }) => {
        return (
          <div key={id}>
            <ModalComments typeComment={"reply"} />
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
                  action={<MenuButtons cardId={id} username={user.username} />}
                />
                <CardContent>
                  <Typography variant="body2">{content}</Typography>
                </CardContent>
              </Box>
            </Card>
            {isReplyOpen && id === commentId && (
              <CardAddComments buttonName={"REPLY"} />
            )}
          </div>
        );
      })}
    </>
  );
};
