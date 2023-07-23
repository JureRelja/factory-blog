import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articleID: 0,
  comments: [],
};

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    loadComments: (state, action) => {
      const { articleID, comments } = action.payload;
      state.articleID = articleID;
      state.comments = comments;
      console.log(state.comments);
    },
    newComment: (state, action) => {
      const newUserComment = action.payload;
      state.comments.push(newUserComment);
    },
  },
});

export const { newComment, loadComments } = commentSlice.actions;

export default commentSlice.reducer;
