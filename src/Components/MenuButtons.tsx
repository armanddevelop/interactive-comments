import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ReplyIcon from "@mui/icons-material/Reply";
import { useSelector } from "react-redux";
import { Dispatch, SetStateAction } from "react";

type MenuButtonsProps = {
  username: string;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

export const MenuButtons = ({
  username,

  setOpenModal,
}: MenuButtonsProps) => {
  const { currentUser } = useSelector((state: any) => state.comments);

  return (
    <>
      {currentUser.username === username ? (
        <>
          <IconButton color="error" onClick={() => setOpenModal(true)}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="settings">
            <EditIcon />
          </IconButton>
        </>
      ) : (
        <>
          <IconButton color="secondary">
            <ReplyIcon />
          </IconButton>
        </>
      )}
    </>
  );
};
