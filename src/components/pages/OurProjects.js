import React from "react";
import '../Styles/project.css'
import ProjectsCard from "../Card/ProjectsCard";

function OurProjects() {
  return (
    <section className="project">
      <div className="container">
        <div className="block-title text-center">
          <p>explore projects</p>
          <h3>our Recent projects</h3>
          <div className="leaf">
            <img src="images/leaf.png" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <ProjectsCard />
          </div>
          <div className="col-xl-4 col-lg-4">
            <ProjectsCard />
          </div>
          <div className="col-xl-4 col-lg-4">
            <ProjectsCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProjects;
