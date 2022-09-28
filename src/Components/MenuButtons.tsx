import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ReplyIcon from "@mui/icons-material/Reply";
import { useSelector } from "react-redux";
import { useCardComments } from "../Hooks/useCardComments";

type MenuButtonsProps = {
  username: string;
  cardId?: string;
};

export const MenuButtons = ({ username, cardId }: MenuButtonsProps) => {
  const { currentUser } = useSelector((state: any) => state.comments);
  const { setActiveComment, openReply } = useCardComments();
  const handleClick = (e: React.MouseEvent<HTMLElement>, id: string = "") => {
    const { action } = e.currentTarget.dataset;
    setActiveComment(action, id);
    openReply(action, id, username);
  };
  return (
    <>
      {currentUser.username === username ? (
        <>
          <IconButton
            color="error"
            data-action="delete"
            onClick={(e) => handleClick(e, cardId)}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="settings">
            <EditIcon />
          </IconButton>
        </>
      ) : (
        <>
          <IconButton
            color="secondary"
            data-action="reply"
            onClick={(e) => handleClick(e, cardId)}
          >
            <ReplyIcon />
          </IconButton>
        </>
      )}
    </>
  );
};
