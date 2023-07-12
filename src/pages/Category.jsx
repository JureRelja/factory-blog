import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import HeaderPostSlider from "../components/headerPostSlider/HeaderPostSlider";
import { useParams } from "react-router-dom";
import SmallBanner from "../components/banners/SmallBanner";
import { posts } from "../assets/dummy-posts";
import PreviewArticle from "../components/articles/PreviewArticle";

function Category() {
  const { category } = useParams();

  // Capitalize first letter of category
  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

  // Filter posts by category
  const filteredArticles = posts.filter((post) => post.category === category);

  return (
    <div className="d-flex flex-column gap-4">
      {/* Post slider in the header */}
      <HeaderPostSlider />

      <div className="d-flex justify-content-between gap-4 w-100">
        <div className="d-flex flex-column gap-4 w-620">
          <div className="bg-body">
            {/* Category title */}
            <div className="category-title">
              <h2 className="articleHeading">{categoryTitle}</h2>
            </div>

            {/* List of articles */}
            {filteredArticles.map((article) => (
              <PreviewArticle key={article.id} article={article} />
            ))}

            {/* Pagination */}
            <div>pagination</div>
          </div>

          {/* Banner */}
          <SmallBanner />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default Category;
