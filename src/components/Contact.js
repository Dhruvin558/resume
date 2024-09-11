import React from "react";
import "./Contact.css";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Contact() {
  return (
    <>
      <div id="contact">Contact Me</div>
      <p className="content2">Let's Work Together!</p>
      <div class="social-icons">
        <a href="https://www.linkedin.com/in/dhruvin-maniya-98419a2a4/">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/Dhruvin558">
          <FaGithub />
        </a>
        <a href="https://wa.me/+919909211890">
          <FaWhatsapp />
        </a>
        <a href="https://www.instagram.com/dhruvin_maniya/#">
          <FaInstagram />
        </a>
        <a href="mailto:dhruvinmaniya0558@gmail.com">
          <SiGmail />
        </a>
      </div>

      <hr />
      <footer>
        © Coding excellence at your service - developed by Dhruvin Maniya
      </footer>
    </>
  );
}

export default Contact;
