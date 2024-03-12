import React from "react";
import "./Section.css";
import { useNavigate } from "react-router-dom";

function Section({ title, img, backgroundColor, color, link }) {
  const sectionStyle = {
    backgroundColor,
    color,
  };

  const navigate = useNavigate();

  const openPage = () => {
    navigate(link);
  };

  return (
    <div className="section" style={sectionStyle}>
      <div className="sec2_half">
        <h3 className="section_title" style={{ color }}>
          {title}
        </h3>
        <button className="section_btn" id="s6_button" onClick={openPage}>
          Open
        </button>
      </div>
      <div className="sec2_half">
        <img src={img} alt={title} className="sec2_img" />
      </div>
    </div>
  );
}

export default Section;
