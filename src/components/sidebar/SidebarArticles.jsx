import React, { useState } from "react";
import { posts } from "../../assets/dummy-posts";
import commentIcon from "../../assets/icons/comment_v2.svg";
import { Link } from "react-router-dom";

const sortingOptions = ["Popular", "Top Rated", "Comments"];

const sidebarPosts = posts.slice(0, 5);

function SidebarArticles() {
  const [activeSorting, setActiveSorting] = useState("Popular");

  const handleSortingChange = (e) => {
    setActiveSorting(e.target.id);
  };

  return (
    <div className="h-618">
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
        {sidebarPosts.map((post) => (
          <Link to={`/${post.category}/${post.id}`} key={post.id}>
            <div className="sidebar-post py-3 px-4">
              <div className="d-flex flex-column align-start">
                <div className="comment-icon-box">
                  <img src={commentIcon} />
                  <p className="m-0 meta-text">{post.commentsNum}</p>
                </div>

                <p className="meta-text p-0 mb-0">{post.createdDate}</p>
                <p className="title p-0 mb-0">{post.postTitle}</p>
              </div>
              <img src={post.featuredImage} className="post-img" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SidebarArticles;
