import { createSlice } from "@reduxjs/toolkit";
import { TCurrentUser, TComments, repliesObj } from "../../../types/types";

const currentUser: TCurrentUser = {
  image: {
    png: "",
    webp: "",
  },
  username: "",
};
const comments: Array<TComments> = [];
const newComment: TComments = {
  id: "",
  content: "",
  createdAt: "",
  score: 0,
  user: {
    image: {
      png: "",
      webp: "",
    },
    username: "",
  },
  replies: [],
};
const newReply: repliesObj = {
  id: "",
  content: "",
  createdAt: "",
  score: 0,
  replyingTo: "",
  user: {
    image: {
      png: "",
      webp: "",
    },
    username: "",
  },
};
export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    currentUser,
    comments,
    newComment,
    newReply,
    commentId: "",
    replyToName: "",
  },
  reducers: {
    onGetComments: (state, { payload }) => {
      const { comments, currentUser } = payload;
      state.currentUser = currentUser;
      state.comments = comments;
      state.newComment.user.image = currentUser.image;
      state.newComment.user.username = currentUser.username;
    },
    onChangeScore: (state, { payload }) => {
      const { typeComment } = payload;
      if (typeComment === "comment") {
        state.comments = state.comments.map((comment) => {
          if (payload.id === comment.id) {
            comment.score = comment.score + payload.vote;
          }
          return comment;
        });
        sessionStorage.setItem("stateInitial", JSON.stringify(state));
      } else {
        state.comments.forEach(({ replies }, idx) => {
          let idxComments = 0;
          if (replies.length !== 0) {
            idxComments = idx;
            replies.forEach((reply, idx) => {
              if (reply.id === payload.id) {
                state.comments[idxComments].replies[idx].score += payload.vote;
              }
            });
          }
        });
        sessionStorage.setItem("stateInitial", JSON.stringify(state));
      }
    },
    onCrateNewComment: (state, { payload }) => {
      const { id, comment, dateCreation, typeComment, replyingTo } = payload;
      if (typeComment !== "reply") {
        state.newComment.content = comment;
        state.newComment.createdAt = dateCreation;
        state.newComment.id = id;
        state.comments.push(state.newComment);
        sessionStorage.setItem("stateInitial", JSON.stringify(state));
      } else {
        state.newReply.content = comment;
        state.newReply.createdAt = dateCreation;
        state.newReply.id = id;
        state.newReply.replyingTo = replyingTo;
        state.newReply.user.image.png = state.currentUser.image.png;
        state.newReply.user.image.webp = state.currentUser.image.webp;
        state.newReply.user.username = state.currentUser.username;
        state.comments.forEach(({ user }, idx) => {
          if (user.username === replyingTo) {
            state.comments[idx].replies.push(state.newReply);
          }
        });
      }
    },
    onDeleteComment: (state, { payload }) => {
      const { id: cardId, typeComment } = payload;
      if (typeComment === "comment") {
        state.comments = state.comments.filter(({ id }) => id !== cardId);
        sessionStorage.setItem("stateInitial", JSON.stringify(state));
      } else {
        let newReplies: Array<repliesObj> = [];
        state.comments.forEach(({ replies }, idx) => {
          let idxComments = 0;
          if (replies.length !== 0) {
            idxComments = idx;
            newReplies = replies.filter(({ id }) => id !== cardId);
            return (state.comments[idxComments].replies = newReplies);
          }
        });
      }
    },

    onSetCommentActive: (state, { payload }) => {
      state.commentId = payload;
    },

    onSetReplyName: (state, { payload }) => {
      state.replyToName = payload;
    },
  },
});

export const {
  onGetComments,
  onChangeScore,
  onCrateNewComment,
  onDeleteComment,
  onSetCommentActive,
  onSetReplyName,
} = commentsSlice.actions;
