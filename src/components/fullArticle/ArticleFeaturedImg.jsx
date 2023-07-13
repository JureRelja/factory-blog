import React from "react";

function ArticleFeaturedImg({ img, title, createdDate }) {
  return (
    <div className="article-featured-img-wrapper ">
      <img src={img} alt={title} />
      <div>
        <span>{createdDate}</span>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default ArticleFeaturedImg;
