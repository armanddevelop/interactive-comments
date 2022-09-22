import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { TCurrentUser } from "../../types/types";
import { ScoreComponent } from "./ScoreComponent";
import { MenuButtons } from "./MenuButtons";
import { ModalComments } from "./Modal";

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
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <ModalComments openModal={openModal} setOpenModal={setOpenModal} />
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
            action={
              <MenuButtons
                username={user.username}
                setOpenModal={setOpenModal}
              />
            }
          />
          <CardContent>
            <Typography variant="body2">{content}</Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};
