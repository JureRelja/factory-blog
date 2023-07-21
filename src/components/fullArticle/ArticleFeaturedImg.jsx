import React from "react";

function ArticleFeaturedImg({ img, title, createdDate }) {
  return (
    <div className="article-featured-img-wrapper ">
      <img src={img} alt={title} />
      <div>
        <span>
          {new Date(createdDate).toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default ArticleFeaturedImg;
