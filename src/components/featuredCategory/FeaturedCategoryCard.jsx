import React from "react";
import { Link } from "react-router-dom";

function FeaturedCategoryCard({ categoryArticle, variant, className }) {
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
        to={`/${categoryArticle.category}/${categoryArticle.id}`}
        className={`featured-category-card-link ${
          variant == 2 && "d-flex gap-2"
        }`}
      >
        <img src={categoryArticle.featuredImage} alt="featured-category" />
        <div className="article-content">
          <div className="d-flex justify-content-between mt-1">
            <p className="p-0 m-0 ">
              {new Date(categoryArticle.createdDate).toLocaleString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            {variant == 1 && (
              <p className="p-0 m-0">{categoryArticle.comments.length}</p>
            )}
          </div>
          <h3>{categoryArticle.articleTitle}</h3>
        </div>
      </Link>
    </div>
  );
}

export default FeaturedCategoryCard;
