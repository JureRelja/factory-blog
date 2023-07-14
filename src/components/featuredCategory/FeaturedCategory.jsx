import React from "react";
import FeaturedCategoryCard from "./FeaturedCategoryCard";
import leftYellowArrow from "../../assets/icons/small-yellow-left-arrow.svg";
import rightYellowArrow from "../../assets/icons/small-yellow-right-arrow.svg";
import leftBrownArrow from "../../assets/icons/small-brown-left-arrow.svg";
import rightBrownArrow from "../../assets/icons/small-brown-right-arrow.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { Link } from "react-router-dom";

function FeaturedCategory({
  categoryPosts,
  categoryTitle,
  borderColor,
  variant,
  path,
}) {
  // Featured category 1 and 2
  if (variant == 1 || variant == 2)
    return (
      <div
        className={`d-flex flex-column gap-3 w-100 bg-body p-4 ${borderColor}`}
      >
        <div className="d-flex justify-content-between align-items-center featured-category-title-wrapper">
          <h2 className="heading mb-2">{categoryTitle}</h2>
          <Link to={path}>
            <span>See all</span>
          </Link>
        </div>
        {variant == 1 ? (
          <div className="d-flex justify-content-between align-items-top">
            {categoryPosts.slice(0, 3).map((post) => (
              <FeaturedCategoryCard
                key={post.id}
                categoryPost={post}
                variant={variant}
              />
            ))}
          </div>
        ) : (
          <div className="d-flex align-items-top justify-content-between flex-wrap gap-4">
            {categoryPosts.slice(0, 4).map((post) => (
              <FeaturedCategoryCard
                key={post.id}
                categoryPost={post}
                variant={variant}
              />
            ))}
          </div>
        )}
      </div>
    );

  // Featured category 3
  const sliderRef1 = useRef(null);

  const doubleCarouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };

  if (variant == 3)
    return (
      <div
        className={`d-flex flex-column gap-3 w-100 bg-body p-4 ${borderColor}`}
      >
        <div className="d-flex justify-content-between align-items-center featured-category-title-wrapper">
          <h2 className="heading">{categoryTitle}</h2>
          <div className="d-flex gap-3">
            <button
              onClick={() => sliderRef1.current.slickPrev()}
              className="bg-body border-0 "
            >
              <img src={leftYellowArrow} alt="arrow" />
            </button>
            <button
              onClick={() => sliderRef1.current.slickNext()}
              className="bg-body border-0"
            >
              <img src={rightYellowArrow} alt="arrow" />
            </button>
          </div>
        </div>
        <div className="category-3-slider-wrapper">
          <Slider {...doubleCarouselSettings} ref={sliderRef1}>
            {categoryPosts.map((post) => (
              <FeaturedCategoryCard
                key={post.id}
                categoryPost={post}
                variant={variant}
              />
            ))}
          </Slider>
        </div>
      </div>
    );

  // Featured category 4
  const sliderRef2 = useRef(null);

  const singleCarousleSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  if (variant == 4)
    return (
      <div
        className={`d-flex flex-column gap-3 w-300 bg-body p-4  ${borderColor}`}
      >
        <div className="d-flex justify-content-between align-items-center featured-category-title-wrapper">
          <h2>{categoryTitle}</h2>
          <div className="d-flex gap-3">
            <button
              onClick={() => sliderRef2.current.slickPrev()}
              className="bg-body border-0"
            >
              <img src={leftBrownArrow} alt="arrow" />
            </button>
            <button
              onClick={() => sliderRef2.current.slickNext()}
              className="bg-body border-0"
            >
              <img src={rightBrownArrow} alt="arrow" />
            </button>
          </div>
        </div>
        <div>
          <Slider {...singleCarousleSettings} ref={sliderRef2}>
            {categoryPosts.map((post) => (
              <FeaturedCategoryCard
                key={post.id}
                categoryPost={post}
                variant={variant}
              />
            ))}
          </Slider>
        </div>
      </div>
    );
}

export default FeaturedCategory;
