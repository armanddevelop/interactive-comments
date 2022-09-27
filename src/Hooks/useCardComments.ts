import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { useDispatch } from "react-redux";
import {
  onCrateNewComment,
  onDeleteComment,
  onSetCommentActive,
} from "../Store/Comments/comments";
import { onOpenModal } from "../Store/UI/uiEvents";
type CommentInfo = {
  id: string;
  typeComment: string;
};

export const useCardComments = () => {
  const dispatch = useDispatch();

  //TODO: make async function to POST Comment
  const createComment = async (comment: string) => {
    if (comment === "") return;
    let newCommentPayload = {
      id: uuidv4(),
      dateCreation: moment(new Date()).format("L"),
      comment,
    };
    dispatch(onCrateNewComment(newCommentPayload));
  };

  const deleteComment = async (commentInfo: CommentInfo) => {
    dispatch(onDeleteComment(commentInfo));
  };
  const setActiveComment = (
    nameEvent: string | undefined,
    id: string | number
  ) => {
    if (nameEvent === "delete") {
      dispatch(onSetCommentActive(id));
      return dispatch(onOpenModal(true));
    }
  };
  return { createComment, deleteComment, setActiveComment };
};
