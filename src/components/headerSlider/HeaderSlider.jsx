import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderSliderCard from "./HeaderSliderCard";
import articles from "../../assets/dummyPosts.json";
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

const featuredArticles = articles.slice(0, 5);

function HeaderSlider() {
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
        {featuredArticles.map((article) => (
          <Link to={`/${article.category}/${article.id}`} key={article.id}>
            <HeaderSliderCard
              title={article.articleTitle}
              date={article.createdDate}
              img={article.featuredImage}
              commentsNumber={article.comments.length}
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default HeaderSlider;
