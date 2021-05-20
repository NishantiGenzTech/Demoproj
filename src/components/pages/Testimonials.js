import React from "react";
import "../Styles/testimon.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="testimonials1">
              <div className="block-title text-left">
                <p>testimonails</p>
                <h4>
                  What our customers are
                  <br />
                  talking about
                </h4>
              </div>
              <div className="testimonialstext">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
              </div>
              <div className="testimonials2">
                <div className="arccontent">
                  <h3 className="counter">4,850000</h3>
                  <p>Agriculture projects are completed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="testimonials3">
              <div className="testimonials4">
                <div className="testimonials_one_single_item">
                  <div className="text">
                    <p>
                      This is due to their excellent service, and augue homero
                      consectetuer in nam. Eu quo laoreet propriae, malis exerci
                      habemus has vocent persius eum ea.
                    </p>
                  </div>
                  <div className="client_thumbnail">
                    <div className="client_img">
                      <img
                        src="../Img/dribbble.jpg"
                        alt="testimonial1-img"
                      />
                    </div>
                    <div className="client_title">
                      <h5>Kevin Hardson</h5>
                      <p>Customer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
