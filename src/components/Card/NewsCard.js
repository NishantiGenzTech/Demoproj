import React from "react";

function NewsCard() {
  return (
    <div className="newscards wow fadeInUp" data-wow-delay="300ms">
      <div className="blog_one_image">
        <div className="blog_image">
          <img src="../Img/ag.jpg" alt="Blog One Image" />
          <div className="blog_one_date_box">
            <p>30 Oct, 2019</p>
          </div>
        </div>
        <div className="blog-one__content">
          <ul className="list-unstyled blog-one__meta">
            <li>
              <a href="#">
                <i className="far fa-user-circle"></i> Admin
              </a>
            </li>
            <li>
              <a href="#">
                <i className="far fa-comments"></i> 2 Comments
              </a>
            </li>
          </ul>
          <h3>
            <a href="#">
              Agriculture Miracle you
              <br />
              Don't Know About
            </a>
          </h3>
          <div className="blog_one_text">
            <p>
              There are lorem ipsum is simply free many variations of ipsum the
              majority suffered.
            </p>
          </div>
          <div className="read_more_btn">
            <a href="#">
              <i className="fa fa-angle-right"></i>Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
