import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ReplyIcon from "@mui/icons-material/Reply";
import { useSelector, useDispatch } from "react-redux";
import { onOpenModal } from "../Store/UI/uiEvents";

type MenuButtonsProps = {
  username: string;
};

export const MenuButtons = ({ username }: MenuButtonsProps) => {
  const { currentUser } = useSelector((state: any) => state.comments);
  const dispatch = useDispatch();

  return (
    <>
      {currentUser.username === username ? (
        <>
          <IconButton color="error" onClick={() => dispatch(onOpenModal(true))}>
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
