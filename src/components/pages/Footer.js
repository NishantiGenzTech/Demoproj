import React from "react";
import "../Styles/Footer.css";
import { Button } from "../Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
        PROVIDE YOU THE HIGHEST QUALITY PRODUCTS
        THAT MEETS YOUR EXPECTATION
        </p>
        <p className="footer-subscription-text">
        Eu quo laoreet propriae, te has, vocent persius eum ea
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Discover More</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About</h2>
            <div class="footer-widget_about_text">
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit. Nulla placerat
                posuere dui. Pellentesque venenatis sem non lacus ac auctor.
              </p>
            </div>
          </div>
          <div class="footer-link-items">
            <h2>EXPLORE</h2>
            <Link to="/">About Us</Link>
            <Link to="/">Services</Link>
            <Link to="/">OUR PROJECT</Link>
            <Link to="/">Conatct</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>News</h2>
            <ul class="footer-widget__news list-unstyled">
              <li>
                <div class="footer-widget__news_text">
                  <p>
                    <a href="news_detail.html">
                      {" "}
                      Learn 10 Best Tips for New Formers
                    </a>
                  </p>
                </div>
                <div class="footer-widget__news_date_box">
                  <p>30 Oct, 2019</p>
                </div>
              </li>
              <li>
                <div class="footer-widget__news_text">
                  <p>
                    <a href="news_detail.html">
                      Farmer Sentiment Darkens Hopes Fade
                    </a>
                  </p>
                </div>
                <div class="footer-widget__news_date_box">
                  <p>30 Oct, 2019</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="footer-link-items">
            <h2>Contact</h2>
            <p>
              66 Broklyn Street, New Town
              <br />
              DC 5752, New Yrok
            </p>
            <a href="mailto:needhelp@agrikol.com">needhelp@agrikol.com</a>
            <br />
            <a href="tel:666-888-0000">666 888 0000</a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
