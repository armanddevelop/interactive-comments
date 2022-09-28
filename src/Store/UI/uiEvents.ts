import { createSlice } from "@reduxjs/toolkit";

export const uiEventsSlice = createSlice({
  name: "uiEvents",
  initialState: {
    openModal: false,
    isReplyOpen: false,
    typeComment: "comment",
  },
  reducers: {
    onOpenModal: (state, { payload }) => {
      state.openModal = payload;
    },
    onOpenReply: (state, { payload }) => {
      state.isReplyOpen = payload;
    },
    onSetTypeComment: (state, { payload }) => {
      state.typeComment = payload;
    },
  },
});
export const { onOpenModal, onOpenReply, onSetTypeComment } =
  uiEventsSlice.actions;
