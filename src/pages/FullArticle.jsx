import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import articles from "../assets/dummyPosts.json";
import Sidebar from "../components/sidebar/Sidebar";
import ArticleContent from "../components/fullArticle/ArticleContent";
import ArticleFeaturedImg from "../components/fullArticle/ArticleFeaturedImg";
import SmallBanner from "../components/banners/SmallBanner";
import AuthorInfo from "../components/fullArticle/AuthorInfo";
import Comments from "../components/fullArticle/Comments";

function FullArticle() {
  const { articleId } = useParams();

  const article = articles.find(
    (article) => article.id === parseInt(articleId)
  );

  return (
    <div className="d-flex flex-column justify-content-start align-items-top gap-4">
      {/* Article's feature image */}
      <ArticleFeaturedImg
        img={article.featuredImage}
        title={article.articleTitle}
        createdDate={article.createdDate}
      />
      <div className="d-flex justify-content-between align-items-top gap-4">
        {/* Article's content */}
        <div className="d-flex flex-column gap-4">
          <ArticleContent content={article.articleContent} />
          <SmallBanner />
          <AuthorInfo author={article.author} />
          <Comments article={article} />
        </div>
        {/* Sidebar */}
        <Sidebar />
      </div>
    </div>
  );
}

export default FullArticle;
