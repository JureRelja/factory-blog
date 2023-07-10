import React from "react";
import FeaturedCategoryCard from "./FeaturedCategoryCard";

function FeaturedCategory({ categoryPosts, categoryTitle, borderColor }) {
  const shortenedPosts = categoryPosts.slice(0, 3);

  return (
    <div
      className={`d-flex flex-column gap-3 w-100 bg-body p-4 ${borderColor}`}
    >
      <div className="d-flex justify-content-between align-items-center featured-category-title-wrapper">
        <h2>{categoryTitle}</h2>
        <span>See all</span>
      </div>
      <div className="d-flex justify-content-between align-items-top">
        {shortenedPosts.map((post) => (
          <FeaturedCategoryCard key={post.id} categoryPost={post} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedCategory;
