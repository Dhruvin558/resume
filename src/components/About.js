import "./About.css";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

import { MenuOutlined } from "@ant-design/icons";

function About() {
  return (
    <>
      <div id="about">
        <div className="navbar">
          <MenuOutlined className="menu" />
          <nav>
            <Link spy={true} smooth={true} offset={50} duration={500} className="nav1" to="about">
              About Me
            </Link>
            <Link spy={true} smooth={true} offset={50} duration={500} to="skill">Skills</Link>
            <Link spy={true} smooth={true} offset={50} duration={500} to="education">Education</Link>
            <Link spy={true} smooth={true} offset={50} duration={500} to="project">Project</Link>
            <Link spy={true} smooth={true} offset={50} duration={500} to="contact">Contact</Link>
          </nav>
        </div>
        <br />
        <div className="container" id="about">
          <div className="text-content">
            <p className="title1">
              Hi 👋 ,<br />
              I’m Dhruvin,
              <br />
              Front-end Developer
            </p>
            <p className="title2">
              Hello, I'm Dhruvin Maniya,dedicated frontend developer with a
              relentless passion in React Technology. Currently pursuing my
              Master's in Computer Applications (MCA) at Lovely Professional
              University, I thrive on challenges and continually seek to expand
              my skills in web development.
            </p>
            <br />
            <p className="title2">
              I design and develop experiences that make people’s lives simpler
              through Websites. I work with HTML5, CSS3, JavaScript, React.JS
              passionate and dedicated React developer with a strong background
              in Web Developing and a flair for problem-solving.
            </p>
            <div className="btn-container">
              <Link spy={true} smooth={true} offset={50} duration={500} to="contact">
              <button className="btn1">HIRE ME</button>
              </Link>
              <Link spy={true} smooth={true} offset={50} duration={500} to="project">
              <button  className="btn2">SEE MY PROJECT</button>
              </Link>
            </div>
          </div>
          {/* <div className="img-container">
            <img
              src="IMG202301141757.jpg"
              className="side-image"
              alt="img of devloper"
            />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default About;
