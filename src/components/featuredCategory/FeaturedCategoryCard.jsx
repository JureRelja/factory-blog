import React from "react";
import { Link } from "react-router-dom";

function FeaturedCategoryCard({ categoryPost, variant, className }) {
  return (
    <div
      className={`d-flex justify-content-start align-top ${className} ${
        variant == 2
          ? "featured-category-2-wrapper"
          : variant == 1
          ? "featured-category-1-wrapper flex-column gap-1"
          : variant == 3
          ? "flex-column gap-1 featured-category-3-wrapper"
          : "featured-category-4-wrapper flex-column gap-1"
      }`}
    >
      <Link
        to={`/${categoryPost.category}/${categoryPost.id}`}
        className={`featured-category-card-link ${
          variant == 2 && "d-flex gap-2"
        }`}
      >
        <img src={categoryPost.featuredImage} alt="featured-category" />
        <div className="post-content">
          <div className="d-flex justify-content-between ">
            <p className="p-0 m-0">{categoryPost.createdDate}</p>
            {variant == 1 && (
              <p className="p-0 m-0">{categoryPost.commentsNum}</p>
            )}
          </div>
          <h3>{categoryPost.postTitle}</h3>
        </div>
      </Link>
    </div>
  );
}

export default FeaturedCategoryCard;
