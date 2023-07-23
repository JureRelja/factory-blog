import React, { useState } from "react";
import articles from "../../assets/dummyPosts.json";
import commentIcon from "../../assets/icons/comment_v2.svg";
import { Link } from "react-router-dom";

const sortingOptions = ["Popular", "Top Rated", "Comments"];

const sidebarArticles = articles.slice(0, 5);

function SidebarArticles() {
  const [activeSorting, setActiveSorting] = useState("Popular");

  const handleSortingChange = (e) => {
    setActiveSorting(e.target.id);
  };

  return (
    <div className="bg-purple">
      <div className="dark-purple py-3 px-4">
        <ul>
          {sortingOptions.map((option) => (
            <li
              className={`${option === activeSorting && "active"}`}
              onClick={handleSortingChange}
              key={option}
              id={option}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
      <div>
        {sidebarArticles.map((article) => (
          <Link to={`/${article.category}/${article.id}`} key={article.id}>
            <div className="sidebar-articles py-3 px-4">
              <div className="d-flex flex-column align-start">
                <div className="comment-icon-box">
                  <img src={commentIcon} />
                  <p className="m-0 meta-text">{article.comments.length}</p>
                </div>

                <p className="meta-text p-0 mb-0">
                  {new Date(article.createdDate).toLocaleString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <p className="title p-0 mb-0">{article.articleTitle}</p>
              </div>
              <img src={article.featuredImage} className="article-img" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SidebarArticles;
