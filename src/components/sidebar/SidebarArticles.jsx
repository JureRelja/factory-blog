import React from "react";
import { sidebarPosts } from "../../assets/dummy-posts";
import commentIcon from "../../assets/icons/comment_v2.svg";

function SidebarArticles() {
  return (
    <div>
      <div className="dark-purple py-3 px-4">
        <ul>
          <li className="active">Popular</li>
          <li>Top Rated</li>
          <li>Comments</li>
        </ul>
      </div>
      <div>
        {sidebarPosts.map((post) => (
          <div className="sidebar-post py-3 px-4" key={post.id}>
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
        ))}
      </div>
    </div>
  );
}

export default SidebarArticles;
