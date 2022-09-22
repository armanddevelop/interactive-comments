import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";

type DeleButtonProps = {
  username: string;
};

export const DeleteButton = ({ username }: DeleButtonProps) => {
  const { currentUser } = useSelector((state: any) => state.comments);
  const deleteButton =
    currentUser.username === username ? (
      <IconButton aria-label="settings">
        <DeleteIcon color="error" />
      </IconButton>
    ) : (
      <></>
    );
  return deleteButton;
};
