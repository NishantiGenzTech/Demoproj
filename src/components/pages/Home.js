import React from "react";
import "../../App.css";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import About from "./About";
import Services from "./Services";
import Agriculture from "./Agriculture";
import Testimonials from "./Testimonials";
import OurProjects from "./OurProjects";
import OurBenefits from "./OurBenefits";
import FreshProducts from "./FreshProducts";
import NewsAri from "./NewsAri";

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Services />
      <Agriculture />
      <Testimonials />
      <OurProjects />
      <OurBenefits />
      <FreshProducts />
      <NewsAri />
      <Footer />
    </>
  );
}

export default Home;
