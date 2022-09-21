import { v4 as uuidv4 } from "uuid";
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
      state.comments = state.comments.map((comment) => {
        if (payload.id === comment.id) {
          comment.score = comment.score + payload.vote;
        }
        return comment;
      });
    },
    onCrateNewComment: (state, { payload }) => {
      state.newComment.content = payload;
      state.newComment.createdAt = "21/09/22";
      state.newComment.id = uuidv4();
      state.comments.push(state.newComment);
    },
  },
});

export const { onGetComments, onChangeScore, onCrateNewComment } =
  commentsSlice.actions;
