import React from "react";
import { Link } from "react-router-dom";

function FooterArticle({ article, index, articleLength }) {
  return (
    <div className="footer-article-wrapper">
      <Link to={`/${article.category}/${article.id}`} key={article.id}>
        <div
          className={`featured-article ${
            index + 1 < articleLength ? "gray-border" : ""
          }`}
        >
          <div className="date-title ">
            <div className="d-flex justify-content-between">
              <p className="p-0 mb-1 meta-text-footer">
                {new Date(article.createdDate).toLocaleString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <p className="p-0 m-0">{article.commentsNum}</p>
            </div>
            <p className="title">{article.articleTitle}</p>
          </div>
          <img src={article.featuredImage} alt="featured" />
        </div>
      </Link>
    </div>
  );
}

export default FooterArticle;
