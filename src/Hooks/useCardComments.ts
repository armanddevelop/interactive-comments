import { useDispatch } from "react-redux";
import { onCrateNewComment } from "../Store/Comments/comments";

export const useCardComments = () => {
  const dispatch = useDispatch();
  //TODO: make async function to POST Comment
  const createComment = async (comment: string) => {
    if (comment === "") return;
    dispatch(onCrateNewComment(comment));
  };
  return { createComment };
};
