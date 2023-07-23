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
    newReply: (state, action) => {
      const { commentID, newReplyComment } = action.payload;
      const commentIndex = state.comments.findIndex(
        (comment) => comment.id === commentID
      );
      state.comments[commentIndex].replies.push(newReplyComment);
    },
  },
});

export const { newComment, loadComments, newReply } = commentSlice.actions;

export default commentSlice.reducer;
