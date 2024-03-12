import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Carousel.css";
// import Img1 from "../assets/Banner.png";
import CaruselItem from "./CaruselItem";

function Carousel() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    arrows: false,
    dots: false,
    adaptiveHeight: false,
    slidesToShow: 1,
    slidesToScroll: 2,
    initialSlide: 0,
    speed: 700,
    easing: "linear",
    infinite: windowWidth > 1180,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
    pauseOnHover: windowWidth > 1180 ? false : true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    touchThreshold: 5,
    touchMove: true,
    waitForAnimate: true,
    centerMode: true,
  };

  const marketings = [
    {
      name: "ballantines",
      img: "ballantines.webp",
    },
    {
      name: "ballentines2",
      img: "ballentines2.jpeg",
    },
    {
      name: "armand",
      img: "armand.jpeg",
    },
    {
      name: "armand3",
      img: "armand3.jpeg",
    },
    {
      name: "becks",
      img: "becks.jpeg",
    },
    {
      name: "becks2",
      img: "becks2.jpeg",
    },
    {
      name: "becks",
      img: "becks.jpeg",
    },
    {
      name: "black",
      img: "black.webp",
    },
    {
      name: "black2",
      img: "black2.jpeg",
    },
    {
      name: "bottega",
      img: "bottega.jpeg",
    },
  ];

  return (
    <div className="carusel">
      <div className="section_type_5_carusel">
        <Slider {...settings}>
          {marketings.map((marketings, index) => (
            <CaruselItem key={index} marketing={marketings} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
