import React from "react";
import "./CountPoint.css";

function CountPoint({ count }) {
  return (
    <div className={count > 0 ? "countPoint" : "countPoint empty"}>{count}</div>
  );
}

export default CountPoint;
