import React from "react";
import calendar from "../../assets/icons/calendar.svg";

function PreviewArticle({ article }) {
  return (
    <div className="preview-article-wrapper">
      <h2 className="articleHeading">{article.postTitle}</h2>
      <div className="meta-data">
        <div className="created-date">
          <img src={calendar} />
          <span>{article.createdDate}</span>
        </div>
        <span>Author: {article.author}</span>
        <span>{article.commentsNum} Comments</span>
      </div>
      <div className="article-img-content">
        <img src={article.featuredImage} />
        <div className="d-flex flex-column justify-content-start align-items-top gap-3">
          <p>{article.postContent.substring(0, 400)}</p>
          <button>Read article</button>
        </div>
      </div>
    </div>
  );
}

export default PreviewArticle;
