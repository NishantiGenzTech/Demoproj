import React from "react";
import "../Styles/services.css";
import Servicescard from "../Card/Servicescard";
import About from "./About";

export default function Services() {
  return (
    <>
      <section className="service">
        <div className="container">
          <div className="block-title text-center">
            <p>What we do</p>
            <h3>Services We Offer</h3>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <Servicescard />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <Servicescard />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <Servicescard />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <Servicescard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
