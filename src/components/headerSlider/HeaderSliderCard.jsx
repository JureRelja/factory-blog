import React from "react";
import comment from "../../assets/icons/comment_v2.svg";

function HeaderSliderCard({ title, date, img, commentsNumber }) {
  return (
    <div className="header-slider-card">
      <img src={img} className="article-img" />

      <div className="article-content">
        <div className="w-75">
          <div className="meta-data">
            <p className="p-0 m-0">
              {new Date(date).toLocaleString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <div className="comments">
              <img src={comment} />
              <p className="p-0 m-0">{commentsNumber}</p>
            </div>
          </div>
          <h1>{title}</h1>
          <button>Read article</button>
        </div>
      </div>
    </div>
  );
}

export default HeaderSliderCard;
