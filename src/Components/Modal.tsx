import { Modal, Typography, Box, Button, Fade } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useCardComments } from "../Hooks";
import { onOpenModal } from "../Store/UI/uiEvents";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type ModalCommentsProps = {
  typeComment: string;
};

export const ModalComments = ({ typeComment }: ModalCommentsProps) => {
  const dispatch = useDispatch();
  const { uiEvents, comments } = useSelector((state: any) => state);
  const { deleteComment } = useCardComments();
  const { openModal: isOpen } = uiEvents;
  const { commentId } = comments;

  const handleClick = () => {
    const commentInfo = {
      id: commentId,
      typeComment,
    };
    dispatch(onOpenModal(false));
    deleteComment(commentInfo);
  };
  return (
    <Modal
      open={isOpen}
      onClose={() => dispatch(onOpenModal(false))}
      className="modal-comments"
    >
      <Fade in={isOpen}>
        <Box sx={style}>
          <Typography variant="h6" component="h1">
            Delete Comment
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            color="darkgrey"
          >
            Are you sure you want to delete this comment? This will be remove
            the comment and can't be undone
          </Typography>
          <Button
            variant="contained"
            onClick={() => dispatch(onOpenModal(false))}
          >
            NO, CANCEL
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleClick()}
          >
            YES, DELETE
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
};
