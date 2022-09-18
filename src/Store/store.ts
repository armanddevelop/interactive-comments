import { configureStore } from "@reduxjs/toolkit";
import { commentsSlice } from "./Comments/comments";

export const store = configureStore({
  reducer: {
    comments: commentsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
