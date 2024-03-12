import React from "react";
import "./CaruselItem.css";

function CaruselItem({ marketing, index }) {
  return (
    <div className="caruselItem">
      <div className="slider_item slider_item1">
        <div className="slider_item_content">
          <img
            src={"./marketing/" + marketing.img}
            alt={marketing.name}
            className="sliderImg"
            id={`sliderImg${index}`}
          />
          {/* <button className="btn" id="s3_btn_slider">
                Buy
              </button> */}
        </div>
      </div>
    </div>
  );
}

export default CaruselItem;
