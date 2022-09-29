import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import {
  onCrateNewComment,
  onDeleteComment,
  onSetCommentActive,
  onSetReplyName,
} from "../Store/Comments/comments";
import {
  onOpenModal,
  onOpenReply,
  onSetTypeComment,
} from "../Store/UI/uiEvents";

type CommentInfoToDelete = {
  id: string;
  typeComment: string;
};

type CommentInfo = {
  id: string;
  dateCreation: string;
  comment: string;
  typeComment: string;
  replyingTo?: string;
};

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
    deleteComment,
    setActiveComment,
    setComment,
  };
};
