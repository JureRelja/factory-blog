import React, { useRef, useState } from "react";
import Slider from "react-slick";
import lowerLeftArrow from "../assets/icons/bottom-slider-left-arrow.svg";
import lowerRightArrow from "../assets/icons/bottom-slider-right-arrow.svg";
import img1 from "../assets/bottomSliderImages/image1.jpg";
import img2 from "../assets/bottomSliderImages/image2.jpg";
import img3 from "../assets/bottomSliderImages/image3.jpg";
import img4 from "../assets/bottomSliderImages/image4.jpg";
import img5 from "../assets/bottomSliderImages/image5.jpg";
import img6 from "../assets/bottomSliderImages/image6.jpg";
import img7 from "../assets/bottomSliderImages/image7.jpg";
import loopIcon from "../assets/icons/search-icon.svg";
import Modal from "react-bootstrap/Modal";

const images = [
  { src: img1, id: 1 },
  { src: img2, id: 2 },
  { src: img3, id: 3 },
  { src: img4, id: 4 },
  { src: img5, id: 5 },
  { src: img6, id: 6 },
  { src: img7, id: 7 },
];

function BottomSlider() {
  const sliderRef = useRef(null);
  const [currentImg, setCurrentImg] = useState(1);
  const [enlargeImg, setEnlargeImg] = useState(false);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCurrentImg(next + 1),
  };

  const handleImgChange = (e) => {
    sliderRef.current.slickGoTo(e.target.id - 1);
  };

  const handleEnlargeImg = () => {
    setEnlargeImg(true);
  };

  const handleCloseImg = () => {
    setEnlargeImg(false);
  };

  return (
    <>
      <Modal
        show={enlargeImg}
        onHide={handleCloseImg}
        className="modal-wrapper"
        centered={true}
        size="xl"
      >
        <img src={images[currentImg - 1].src} className="enlarged-img " />
      </Modal>

      <div className={`bottom-slider-wrapper`}>
        <div>
          <Slider {...sliderSettings} ref={sliderRef}>
            {images.map((image) => (
              <img
                src={image.src}
                className={`bottom-slider-item`}
                key={image.id}
                id={image.id}
              />
            ))}
          </Slider>
          <img
            src={loopIcon}
            className="loop-icon"
            onClick={handleEnlargeImg}
          />
        </div>
        <div className="d-flex justify-content-center align-items-center gap-2 navigation-items h-50">
          {images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              className="bottom-slider-nav-item"
              id={image.id}
              onClick={handleImgChange}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default BottomSlider;

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src={lowerLeftArrow} />
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
      <img src={lowerRightArrow} />
    </div>
  );
}
