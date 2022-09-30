import { Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useCardComments } from "../Hooks";

type CardShowCommentsProps = {
  content: string;
  commentId: string;
  isEditComment: boolean;
  cardId: string;
  buttonName: string;
  typeContent: string;
};

export const CardShowContent = ({
  content,
  commentId,
  isEditComment,
  cardId,
  buttonName,
  typeContent,
}: CardShowCommentsProps) => {
  const { editComment } = useCardComments();
  const [comment, setComment] = useState(content);
  const handleClick = (commentIdToEdit: string) => {
    editComment({ comment, commentIdToEdit, typeContent });
  };
  return (
    <>
      {isEditComment && commentId === cardId ? (
        <>
          <TextField
            value={comment}
            multiline
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            color="secondary"
            sx={{ marginLeft: "15px", width: "70%" }}
          />
          <Button
            variant="contained"
            onClick={() => handleClick(commentId)}
            sx={{
              width: "12%",
              marginLeft: "20px",
              height: "50px",
              background: "#5D08B2",
            }}
          >
            {buttonName}
          </Button>
        </>
      ) : (
        <Typography variant="body2">{content}</Typography>
      )}
    </>
  );
};
