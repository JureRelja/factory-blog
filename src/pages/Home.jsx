import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import HeaderPostSlider from "../components/HeaderPostSlider/HeaderPostSlider";
import FeaturedCategory1 from "../components/FeaturedCategory1/FeaturedCategory";
import { posts } from "../assets/dummy-posts";
import SmallBanner from "../components/banners/SmallBanner";
import LargeBanner from "../components/banners/LargeBanner";

const featuredCategories1 = [
  { title: "News", border: "border-blue" },
  { title: "Sport", border: "border-green" },
];

function Home() {
  return (
    <div className="d-flex flex-column gap-4">
      {/* Post slider in the header */}
      <HeaderPostSlider />

      {/* Categories and sidebar */}
      <div className="d-flex justify-content-between gap-4 w-100">
        <div className="d-flex flex-column gap-4 w-100">
          {/* Featured categories 1*/}
          {featuredCategories1.map((category) => (
            <FeaturedCategory1
              categoryTitle={category.title}
              categoryPosts={posts}
              borderColor={category.border}
            />
          ))}
          {/* Banner */}
          <SmallBanner />
          {/* Featured categories 2 */}

          {/* Banner */}

          {/* Double carousel */}

          {/* Single carousel */}
        </div>
        <Sidebar />
      </div>
      <LargeBanner />
      {/* Image slider in the bottom */}
    </div>
  );
}

export default Home;
