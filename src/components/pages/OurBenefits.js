import React from "react";
import BenefiteCard from "../Card/BenefiteCard";
import '../Styles/benefit.css'


function OurBenefits() {
  return (
    <section className="ourbenefits">
      <div
        className="ourbenefits_bg"
        style={{"background-image": "url(images/benifits_bg.png)"}}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div className="block-title text-left">
              <p>Our ourbenefits</p>
              <h3>
                Agriculture & Eco
                <br />
                Farming
              </h3>
            </div>
          </div>
          <div className="col-xl-8 d-flex">
            <div className="my-auto">
              <div className="ourbenefits_text">
                <p>
                  There are many variations of passages of available but the
                  majority have suffered alteration in some form, by injected
                  humou or randomised words which don't look even slightly
                  believable. There are many variations of passages of available
                  but the majority have suffered alteration in some form, by
                  injected humou or randomised words which don't look even
                  slightly believable.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ourbenefits1">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <BenefiteCard />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <BenefiteCard />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <BenefiteCard />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurBenefits;
