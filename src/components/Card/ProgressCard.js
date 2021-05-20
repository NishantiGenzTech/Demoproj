import React from "react";

function ProgressCard() {
  return (
    <div className="bar">
      <div className="bar-innner">
        <div className="skill-percent">
          <span className="count-text" data-speed="3000" data-stop="98">
            0
          </span>
          <span className="percent">%</span>
        </div>
        <div className="bar-fill" data-percent="98"></div>
      </div>
    </div>
  );
}

export default ProgressCard;
