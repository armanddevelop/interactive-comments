import { createSlice } from "@reduxjs/toolkit";

export const uiEventsSlice = createSlice({
  name: "uiEvents",
  initialState: {
    openModal: false,
  },
  reducers: {
    onOpenModal: (state, { payload }) => {
      state.openModal = payload;
    },
  },
});
export const { onOpenModal } = uiEventsSlice.actions;
