import React from "react";

function AuthorInfo({ author }) {
  return (
    <div className="author-info-wrapper">
      <h2 className="heading">About the Author</h2>
      <div className="author-info-inner">
        <img src={author.avatar} alt={author.name} />
        <div>
          <p>{author.desciption}</p>
        </div>
      </div>
    </div>
  );
}

export default AuthorInfo;
