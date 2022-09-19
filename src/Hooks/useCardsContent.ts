import { useDispatch, useSelector } from "react-redux";
import { stateComments } from "../../types/types";
import dataComments from "../data/data.json";
import { onGetComments, onChangeScore } from "../Store/Comments/comments";

export const useCardsContent = () => {
  const { currentUser, comments } = useSelector(
    (state: stateComments) => state.comments
  );
  const dispatch = useDispatch();
  //TODO: async function
  const getComments = () => {
    dispatch(onGetComments(dataComments));
  };
  const changeScore = (votes: any) => {
    dispatch(onChangeScore(votes));
  };
  return { currentUser, comments, getComments, changeScore };
};
