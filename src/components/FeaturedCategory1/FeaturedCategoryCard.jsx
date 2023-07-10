import React from "react";

function FeaturedCategoryCard({ categoryPost }) {
  return (
    <div className="featured-category-1-wrapper">
      <img src={categoryPost.featuredImage} alt="featured-category" />
      <div className="post-content">
        <div className="d-flex justify-content-between ">
          <p className="p-0 m-0">{categoryPost.createdDate}</p>
          <p className="p-0 m-0">{categoryPost.commentsNum}</p>
        </div>
        <h3>{categoryPost.postTitle}</h3>
      </div>
    </div>
  );
}

export default FeaturedCategoryCard;
