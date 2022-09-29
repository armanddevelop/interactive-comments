import { TCurrentUser, TComments, repliesObj } from "../../types/types";

export const currentUser: TCurrentUser = {
  image: {
    png: "",
    webp: "",
  },
  username: "",
};

export const comments: Array<TComments> = [];

export const newComment: TComments = {
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

export const newReply: repliesObj = {
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
