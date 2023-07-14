import React from "react";
import { Link } from "react-router-dom";

function FooterPost({ post, index, postsLength }) {
  return (
    <div className="footer-post-wrapper">
      <Link to={`/${post.category}/${post.id}`} key={post.id}>
        <div
          className={`featured-post ${
            index + 1 < postsLength ? "gray-border" : ""
          }`}
        >
          <div className="date-title ">
            <div className="d-flex justify-content-between">
              <p className="p-0 mb-1 meta-text-footer">{post.createdDate}</p>
              <p className="p-0 m-0">{post.commentsNum}</p>
            </div>
            <p className="title">{post.postTitle}</p>
          </div>
          <img src={post.featuredImage} alt="featured" />
        </div>
      </Link>
    </div>
  );
}

export default FooterPost;
