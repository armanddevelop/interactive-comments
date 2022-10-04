import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  commentEdit,
  CommentInfoToDelete,
  CommentInfo,
} from "../../types/types";
import {
  onCrateNewComment,
  onDeleteComment,
  onEditComment,
  onSetCommentActive,
  onSetReplyName,
} from "../Store/Comments/comments";
import {
  onOpenModal,
  onOpenReply,
  onSetTypeComment,
  onsetEditComment,
} from "../Store/UI/uiEvents";

export const useCardComments = () => {
  const dispatch = useDispatch();
  const { uiEvents, comments } = useSelector((state: any) => state);
  const { typeComment } = uiEvents;
  const { replyToName } = comments;
  const [comment, setComment] = useState("");

  //TODO: make async function to POST Comment
  const createComment = async (comment: string) => {
    if (comment === "") {
      dispatch(onSetTypeComment("comment"));
      dispatch(onOpenReply(false));
      return;
    }
    const newCommentPayload: CommentInfo = {
      id: uuidv4(),
      dateCreation: moment(new Date()).format("L"),
      comment,
      typeComment,
    };
    if (typeComment === "comment") {
      dispatch(onCrateNewComment(newCommentPayload));
    } else if (typeComment === "reply") {
      newCommentPayload.replyingTo = replyToName;
      dispatch(onCrateNewComment(newCommentPayload));
      dispatch(onSetTypeComment("comment"));
      dispatch(onOpenReply(false));
    }
  };

  const editComment = async ({
    comment,
    commentIdToEdit,
    typeContent,
  }: commentEdit) => {
    if (comment !== "") {
      dispatch(onEditComment({ comment, commentIdToEdit, typeContent }));
      dispatch(onsetEditComment(false));
    }
  };

  const deleteComment = async (commentInfo: CommentInfoToDelete) => {
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
    if (nameEvent === "edit") {
      dispatch(onSetCommentActive(id));
      dispatch(onsetEditComment(true));
    }
  };

  const openReply = (
    action: string | undefined,
    id: string | number,
    userName: string
  ) => {
    if (action === "reply") {
      dispatch(onSetTypeComment(action));
      dispatch(onSetCommentActive(id));
      dispatch(onSetReplyName(userName));
      dispatch(onOpenReply(true));
    }
  };

  return {
    comment,
    openReply,
    createComment,
    editComment,
    deleteComment,
    setActiveComment,
    setComment,
  };
};
