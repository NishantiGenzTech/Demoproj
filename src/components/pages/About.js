import React from 'react';
import '../Styles/about.css'

function About() {
    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="aboutimg">
                            <div className="about1"></div>
                            <img className="abtimg" src="../../Img/ag.jpg" alt="About-Img" />
                            <div className="about1icon">
                                <div className="circle">
                                   
                                </div>
                            </div>
                            <div className="about_img2">
                                <img src="../../Img/download.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="block-title text-left">
                            <p>About agriculture</p>
                            <h3>We’re leader in agriculture market</h3>
                            <div className="leaf">
                                <img src="images/leaf.png" alt="" />
                            </div>
                        </div>
                        <div className="aboutcontent">
                            <div className="text">
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by injected humour, or randomised words which
                                    don't look even slightly believable.</p>
                            </div>
                            <div className="about1e">
                                <div className="about13">
                                    <div className="about1_icon">
                                        <span className="icon-harvest"></span>
                                    </div>
                                    <p>Growing Fruits and Vegetables</p>
                                </div>
                                <div className="about13">
                                    <p>Tips for Ripening your Fruits</p>
                                </div>
                            </div>
                            <div className="bottomtxt">
                                <p> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                    anything embarrassing hidden in the middle of text.</p>
                            </div>
                            <div className="about1__button-block">
                                <a href="#" className="thm-btn about_one__btn">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;