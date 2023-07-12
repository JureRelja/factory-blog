import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderSliderCard from "./HeaderSliderCard";
import { posts } from "../../assets/dummy-posts";
import headerSliderLeft from "../../assets/icons/header-slider-left-arrow.svg";
import headerSliderRight from "../../assets/icons/header-slider-right-arrow.svg";
import { Link } from "react-router-dom";

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src={headerSliderLeft} alt="header-slider-left-arrow" />
    </div>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src={headerSliderRight} alt="header-slider-right-arrow" />
    </div>
  );
}

const featuredPosts = posts.slice(0, 5);

function HeaderPostSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="header-slider-wrapper">
      <Slider {...settings}>
        {featuredPosts.map((post) => (
          <Link to={`/${post.category}/${post.id}`} key={post.id}>
            <HeaderSliderCard
              title={post.postTitle}
              date={post.createdDate}
              img={post.featuredImage}
              commentsNumber={post.commentsNum}
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default HeaderPostSlider;
