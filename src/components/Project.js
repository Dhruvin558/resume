import React from "react";
import "./Project.css";

function Project() {
  return (
    <>
      <div id="project">My Projects</div>

      <div className="projcont">
        <div className="project">
          <div className="project-info">
            <h2>1. Gym/Fitness Center Website</h2>
            <br />
            <p className="content">
              Developed a Fitness Center Website This website was created using
              HTML, CSS, JavaScript, and React, focusing exclusively on the
              frontend. It features an intuitive layout that highlights various
              fitness programs, class schedules, and membership options,
              enhancing user engagement and accessibility.
              <br />
              <br />
              <br />
            </p>
          </div>
          <div className="project-links">
            <a
              href="https://gym-fitness-center.netlify.app/"
              className="btn-box"
            >
              See Project
            </a>
          </div>
        </div>

        <div className="project">
          <div className="project-info">
            <h2>2. Event organization</h2>
            <br />
            <p className="content">
              Developed a responsive event organization website using ReactJS,
              featuring user-friendly navigation and smooth page transitions.
              Integrated key functionalities for event registration and
              information display, emphasizing dynamic content rendering and
              efficient state management.
              <br />
              <br />
              <br />
            </p>
            <div className="project-links">
              <a
                href="https://github.com/krutik8904/Record_system"
                className="btn-box"
              >
                See Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
