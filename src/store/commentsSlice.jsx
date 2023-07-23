import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [
    {
      articleID: 0,
      comments: [],
    },
  ],
};

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    loadComments: (state, action) => {
      const { articleID, comments } = action.payload;
      if (state.articles.find((article) => article.articleID === articleID)) {
        return;
      }
      const commentsForStore = {
        articleID: articleID,
        comments: comments,
      };
      state.articles.push(commentsForStore);
    },
    newComment: (state, action) => {
      const { articleID, newUserComment } = action.payload;

      const articleIndex = state.articles.findIndex(
        (article) => article.articleID === articleID
      );

      state.articles[articleIndex].comments.push(newUserComment);
    },
    newReply: (state, action) => {
      const { articleID, commentID, newReplyComment } = action.payload;

      const articleIndex = state.articles.findIndex(
        (article) => article.articleID === articleID
      );

      const commentIndex = state.articles[articleIndex].comments.findIndex(
        (comment) => comment.id === commentID
      );
      state.articles[articleIndex].comments[commentIndex].replies.push(
        newReplyComment
      );
    },
  },
});

export const { newComment, loadComments, newReply } = commentSlice.actions;

export default commentSlice.reducer;
