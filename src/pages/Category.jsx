import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import HeaderPostSlider from "../components/headerPostSlider/HeaderPostSlider";
import { useParams } from "react-router-dom";
import SmallBanner from "../components/banners/SmallBanner";
import { posts } from "../assets/dummy-posts";
import PreviewArticle from "../components/PreviewArticle";
import Pagination from "react-bootstrap/Pagination";

function Category() {
  const { category } = useParams();

  const [active, setActive] = useState(1);

  let paginationItems = [];
  for (let number = 1; number <= 10; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === active}
        className="pagination-item"
        linkClassName={`pagination-item ${number === active ? "active" : ""}`}
        onClick={() => setActive(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

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
            <Pagination className="pagination-items">
              {paginationItems}
            </Pagination>
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
