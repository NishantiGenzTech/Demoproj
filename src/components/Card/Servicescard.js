import React from "react";

function Servicescard() {
  return (
    <div className="service1">
      <div className="content">
        <h3>
          Fresh
          <br />
          vegetables
        </h3>
        <p>Lorem ipsum is simply are many variations of pass of majority.</p>
      </div>
      <div className="service1_img">
        <img src="../Img/download (1).jpg" alt="Service Image" />
        <div className="hover_box">
          <a href="#">
            <span className="icon-left-arrow"></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Servicescard;
