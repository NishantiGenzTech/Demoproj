import React from "react";
import NewsCard from "../Card/NewsCard";
import "../Styles/newsart.css";

function NewsAri() {
  return (
    <section className="newsa">
      <div className="container">
        <div className="block-title text-center">
          <p>from the blog</p>
          <h3>News & Articles</h3>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <NewsCard />
          </div>
          <div className="col-xl-4 col-lg-4">
            <NewsCard />
          </div>
          <div className="col-xl-4 col-lg-4">
            <NewsCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsAri;
