import { createSlice } from "@reduxjs/toolkit";
import { TCurrentUser, TComments } from "../../../types/types";

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
export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    currentUser,
    comments,
    newComment,
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
      const { id, comment, dateCreation } = payload;
      state.newComment.content = comment;
      state.newComment.createdAt = dateCreation;
      state.newComment.id = id;
      state.comments.push(state.newComment);
      sessionStorage.setItem("stateInitial", JSON.stringify(state));
    },
    onDeleteComment: (state, { payload }) => {
      console.log("esto vale payload ", payload);
      const { cardId, typeComment } = payload;
      if (typeComment === "comment") {
        state.comments = state.comments.filter(({ id }) => id !== cardId);
        sessionStorage.setItem("stateInitial", JSON.stringify(state));
      } else {
        // state.comments.map(({ replies }) => {
        //   if (replies.length !== 0) {
        //     replies.filter(({ id }) => id !== cardId);
        //   }
        //   return replies;
        // });
      }
    },
  },
});

export const {
  onGetComments,
  onChangeScore,
  onCrateNewComment,
  onDeleteComment,
} = commentsSlice.actions;
