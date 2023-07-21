import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    articleID: 0,
    comments: [],
  },
];

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    newComment: (state, action) => {
      const { articleID, newComment } = action.payload;
      console.log(newComment);
      const article = state.find((article) => article.articleID === articleID);
      console.log(article);
      article.comments.push(newComment);
    },
    loadComments: (state, action) => {
      const { articleID, comments } = action.payload;
      const articleComments = {
        articleID: articleID,
        comments: comments,
      };
      state.push(articleComments);
    },
  },
});

export const { newComment, loadComments } = commentSlice.actions;

export default commentSlice.reducer;
