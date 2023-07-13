import React from "react";

function ArticleContent({ content }) {
  return (
    <div className="article-content-wrapper">
      {content.map((element) => {
        if (element.type === "paragraph") {
          return (
            <div className="paragraph-wrapper" key={element.id}>
              <p>{element.content}</p>
            </div>
          );
        } else if (element.type === "image") {
          return (
            <div className="image-wrapper" key={element.id}>
              <img src={element.content} />
            </div>
          );
        }
      })}
    </div>
  );
}

export default ArticleContent;
