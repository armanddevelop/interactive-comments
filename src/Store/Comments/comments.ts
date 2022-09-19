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

export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    currentUser,
    comments,
  },
  reducers: {
    onGetComments: (state, { payload }) => {
      const { comments, currentUser } = payload;
      state.currentUser = currentUser;
      state.comments = comments;
    },
    onChangeScore: (state, { payload }) => {
      state.comments = state.comments.map((comment) => {
        if (payload.id === comment.id) {
          comment.score = comment.score + payload.vote;
        }
        return comment;
      });
    },
  },
});

export const { onGetComments, onChangeScore } = commentsSlice.actions;
