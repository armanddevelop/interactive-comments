import { createSlice } from "@reduxjs/toolkit";

export const uiEventsSlice = createSlice({
  name: "uiEvents",
  initialState: {
    openModal: false,
    isReplyOpen: false,
  },
  reducers: {
    onOpenModal: (state, { payload }) => {
      state.openModal = payload;
    },
    onOpenReply: (state, { payload }) => {
      state.isReplyOpen = payload;
    },
  },
});
export const { onOpenModal, onOpenReply } = uiEventsSlice.actions;
