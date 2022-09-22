import { Modal, Typography, Box, Button, Fade } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type ModalCommentsProps = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

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

export const ModalComments = ({
  openModal,
  setOpenModal,
}: ModalCommentsProps) => {
  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      className="modal-comments"
    >
      <Fade in={openModal}>
        <Box sx={style}>
          <Typography variant="h6" component="h1">
            Delete Comment
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            color="darkgrey"
          >
            Are you sure you wnat to delete this comment? This will be remove
            the comment and can't be undone
          </Typography>
          <Button variant="contained">NO, CANCEL</Button>
          <Button variant="contained" color="error">
            YES, DELETE
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
};
