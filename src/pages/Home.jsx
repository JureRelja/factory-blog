import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import HeaderPostSlider from "../components/headerPostSlider/HeaderPostSlider";
import FeaturedCategory from "../components/featuredCategory/FeaturedCategory";
import { posts } from "../assets/dummy-posts";
import SmallBanner from "../components/banners/SmallBanner";
import LargeBanner from "../components/banners/LargeBanner";
import BottomSlider from "../components/bottomSlider/BottomSlider";

const featuredCategories1 = [
  { title: "News", border: "border-blue" },
  { title: "Sport", border: "border-green" },
];

const featuredCategories2 = [{ title: "Business", border: "border-red" }];

const featuredCategories3 = [{ title: "News", border: "border-yellow" }];

const featuredCategories4 = [
  {
    title: "News",
    border: "border-brown",
  },
  {
    title: "Sport",
    border: "border-brown",
  },
];

function Home() {
  return (
    <div className="d-flex flex-column gap-4">
      {/* Post slider in the header */}
      <HeaderPostSlider />

      {/* Categories and sidebar */}
      <div className="d-flex justify-content-between gap-4 w-100">
        <div className="d-flex flex-column gap-4 w-620">
          {/* Featured categories 1*/}
          {featuredCategories1.map((category) => (
            <FeaturedCategory
              key={category.title}
              categoryTitle={category.title}
              categoryPosts={posts}
              borderColor={category.border}
              variant={1}
            />
          ))}
          {/* Banner */}
          <SmallBanner />
          {/* Featured categories 2 */}
          {featuredCategories2.map((category) => (
            <FeaturedCategory
              key={category.title}
              categoryTitle={category.title}
              categoryPosts={posts}
              borderColor={category.border}
              variant={2}
            />
          ))}
          {/* Banner */}
          <SmallBanner />
          {/* Double carousel */}
          {featuredCategories3.map((category) => (
            <FeaturedCategory
              key={category.title}
              categoryTitle={category.title}
              categoryPosts={posts}
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
                categoryPosts={posts}
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
