// import React, { useState, useEffect } from "react";
import React from "react";
import "./HeroSection.css";
import arrow from "../assets/arrow.svg";

// import bg01 from "../assets/marketing/bg01.jpg";
// import bg02 from "../assets/marketing/bg02.jpg";
// import bg03 from "../assets/marketing/bg03.jpg";
// import bg04 from "../assets/marketing/bg04.jpg";
// import bg05 from "../assets/marketing/bg05.jpg";
// import bg06 from "../assets/marketing/bg06.jpg";
// import bg07 from "../assets/marketing/bg07.jpg";
// import bg08 from "../assets/marketing/bg08.jpg";
// import bg09 from "../assets/marketing/bg09.jpg";
// import bg10 from "../assets/marketing/bg10.jpg";
// import bg11 from "../assets/marketing/bg11.jpg";
// import bg12 from "../assets/marketing/bg12.jpg";
// import bg13 from "../assets/marketing/bg13.jpg";
// import bg14 from "../assets/marketing/bg14.jpg";
// import bg15 from "../assets/marketing/bg15.jpg";

// const bgImages = [
//   bg01,
//   bg02,
//   bg03,
//   bg04,
//   bg05,
//   bg06,
//   bg07,
//   bg08,
//   bg09,
//   bg10,
//   bg11,
//   bg12,
//   bg13,
//   bg14,
//   bg15,
// ];

// function preloadImages(imageArray) {
//   const promises = [];
//   for (let i = 0; i < imageArray.length; i++) {
//     const promise = new Promise((resolve) => {
//       const img = new Image();
//       img.src = imageArray[i];
//       img.onload = resolve;
//     });
//     promises.push(promise);
//   }
//   return Promise.all(promises);
// }

function HeroSection() {
  //   const [currentBgIndex, setCurrentBgIndex] = useState(0);

  //   useEffect(() => {
  //     preloadImages(bgImages).then(() => {
  //       const intervalId = setInterval(() => {
  //         setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
  //       }, 5000);

  //       return () => clearInterval(intervalId);
  //     });
  //   }, []);

  //   const getBackgroundStyle = () => {
  //     const imageUrl =
  //       bgImages[currentBgIndex === 0 ? currentBgIndex : currentBgIndex - 1];
  //     return {
  //       background: `url(${imageUrl}) no-repeat center center / cover`,
  //     };
  //   };

  return (
    <div
      className="heroSection"
      // style={getBackgroundStyle()}
    >
      <h2 className="heroText" id="heroText1">
        Let's get
      </h2>
      <h2 className="heroText" id="heroText2">
        party
      </h2>
      <h2 className="heroText" id="heroText3">
        delivered
      </h2>
      <h2 className="heroText" id="heroText4">
        to your home!
      </h2>
      <div className="arrowBox">
        <img src={arrow} alt="not found" className="arrow" />
      </div>
    </div>
  );
}

export default HeroSection;
