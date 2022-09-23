import { configureStore } from "@reduxjs/toolkit";
import { commentsSlice } from "./Comments/comments";
import { uiEventsSlice } from "./UI/uiEvents";

export const store = configureStore({
  reducer: {
    comments: commentsSlice.reducer,
    uiEvents: uiEventsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
