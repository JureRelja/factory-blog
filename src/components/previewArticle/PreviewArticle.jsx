import React from "react";
import calendar from "../../assets/icons/calendar.svg";
import { Link } from "react-router-dom";

function PreviewArticle({ article }) {
  return (
    <div className="preview-article-wrapper">
      <Link
        to={`/${article.category}/${article.id}`}
        className="text-decoration-none"
      >
        <h2 className="heading mb-2 text-decoration-none">
          {article.articleTitle}
        </h2>
      </Link>
      <div className="meta-data">
        <div className="created-date">
          <img src={calendar} />
          <span>
            {new Date(article.createdDate).toLocaleString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
        <span>Author: {article.author.name}</span>
        <span>{article.comments.length} Comments</span>
      </div>
      <div className="article-img-content">
        <Link
          to={`/${article.category}/${article.id}`}
          className="text-decoration-none"
        >
          <img src={article.featuredImage} />
        </Link>
        <div className="d-flex flex-column justify-content-start align-items-top gap-3">
          <p>{article.articleContent[0].content.substring(0, 400)}</p>
          <Link to={`/${article.category}/${article.id}`}>
            <button>Read article</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PreviewArticle;
