import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import HeaderSlider from "../components/headerSlider/HeaderSlider";
import { useParams } from "react-router-dom";
import SmallBanner from "../components/banners/SmallBanner";
import articles from "../assets/dummyPosts.json";
import PreviewArticle from "../components/previewArticle/PreviewArticle";
import Pagination from "react-bootstrap/Pagination";

const articlesPerPage = 5;

function Category() {
  const { category } = useParams(); // Get category from url

  const scrollRef = useRef(null); // Ref for scrolling to the top of the page when pagination is clicked

  // Capitalize first letter of category
  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

  // Filter posts by category
  const filteredArticles = articles.filter(
    (articles) => articles.category === category
  );

  const [active, setActive] = useState(1); // Active page number
  const numOfPages = Math.ceil(filteredArticles.length / articlesPerPage);

  // Pagination items
  let paginationItems = [];

  for (let number = 1; number <= numOfPages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === active}
        className="pagination-item"
        linkClassName={`pagination-item ${number === active ? "active" : ""}`}
        onClick={() => handlePagination(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  const handlePagination = (number) => {
    setActive(number);
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  //Paginated articles
  const paginatedArticles = filteredArticles.slice(
    (active - 1) * articlesPerPage,
    active * articlesPerPage
  );

  const sortedArticles = paginatedArticles.sort((a, b) => {
    return new Date(b.createdDate) - new Date(a.createdDate);
  });

  useEffect(() => {
    setActive(1);
  }, [category]);

  return (
    <div className="d-flex flex-column gap-4">
      {/* Post slider in the header */}
      <HeaderSlider />

      <div className="d-flex justify-content-between gap-4 w-100">
        <div className="d-flex flex-column gap-4 w-620">
          <div className="bg-body" ref={scrollRef}>
            {/* Category title */}
            <div className="category-title">
              <h2 className="heading">{categoryTitle}</h2>
            </div>

            {/* List of articles */}

            {sortedArticles.map((article) => (
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
