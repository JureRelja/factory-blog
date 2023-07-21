import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./commentsSlice";

export const store = configureStore({
  reducer: {
    comments: commentReducer,
  },
});
