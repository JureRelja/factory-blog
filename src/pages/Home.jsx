import React, { useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import HeaderSlider from "../components/headerSlider/HeaderSlider";
import FeaturedCategory from "../components/featuredCategory/FeaturedCategory";
import SmallBanner from "../components/banners/SmallBanner";
import LargeBanner from "../components/banners/LargeBanner";
import BottomSlider from "../components/BottomSlider";
import articles from "../assets/dummyPosts.json";

const newsArticles = articles
  .filter((article) => article.category == "news")
  .slice(0, 3);
const sportsArticles = articles
  .filter((article) => article.category == "sport")
  .slice(0, 3);
const businessArticles = articles
  .filter((article) => article.category == "business")
  .slice(0, 4);

const featuredCategories1 = [
  {
    title: "News",
    border: "border-blue",
    path: "/news",
    articles: newsArticles.sort(
      (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
    ),
  },
  {
    title: "Sport",
    border: "border-green",
    path: "/sport",
    articles: sportsArticles.sort(
      (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
    ),
  },
];

const featuredCategories2 = [
  {
    title: "Business",
    border: "border-red",
    path: "/business",
    articles: businessArticles.sort(
      (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
    ),
  },
];

const featuredCategories3 = [
  {
    title: "News Carousel",
    border: "border-yellow",
    articles: newsArticles.sort(
      (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
    ),
  },
];

const featuredCategories4 = [
  {
    title: "News",
    border: "border-brown",
    articles: newsArticles.sort(
      (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
    ),
  },
  {
    title: "Sport",
    border: "border-brown",
    articles: newsArticles.sort(
      (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
    ),
  },
];

function Home() {
  return (
    <div className="d-flex flex-column gap-4">
      {/* Post slider in the header */}
      <HeaderSlider />

      {/* Categories and sidebar */}
      <div className="d-flex justify-content-between gap-4 w-100">
        <div className="d-flex flex-column gap-4 w-620">
          {/* Featured categories 1*/}
          {featuredCategories1.map((category) => (
            <FeaturedCategory
              key={category.title}
              categoryTitle={category.title}
              categoryArticles={category.articles}
              borderColor={category.border}
              variant={1}
              path={category.path}
            />
          ))}
          {/* Banner */}
          <SmallBanner />
          {/* Featured categories 2 */}
          {featuredCategories2.map((category) => (
            <FeaturedCategory
              key={category.title}
              categoryTitle={category.title}
              categoryArticles={category.articles}
              borderColor={category.border}
              variant={2}
              path={category.path}
            />
          ))}
          {/* Banner */}
          <SmallBanner />
          {/* Double carousel */}
          {featuredCategories3.map((category) => (
            <FeaturedCategory
              key={category.title}
              categoryTitle={category.title}
              categoryArticles={category.articles}
              borderColor={category.border}
              variant={3}
            />
          ))}

          {/* Single carousel */}
          <div className="d-flex justify-content-center align-items-top w-100 gap-3">
            {featuredCategories4.map((category) => (
              <FeaturedCategory
                key={category.title}
                categoryTitle={category.title}
                categoryArticles={category.articles}
                borderColor={category.border}
                variant={4}
              />
            ))}
          </div>
        </div>
        <Sidebar />
      </div>
      <LargeBanner />

      {/* Image slider in the bottom */}
      <BottomSlider />
    </div>
  );
}

export default Home;
