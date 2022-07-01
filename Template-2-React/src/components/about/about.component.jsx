import React from "react";
import "./about.styles.css";
import image from "../../../src/assets/images/phones.png";
const About = () => (
  <div class="about">
    <div class="container">
      <div class="main-heading">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          blanditiis ex accusamus consectetur eaque. Perspiciatis ullam expedita
          saepe incidunt deserunt?
        </p>
      </div>
      <img src={image} alt="" />
    </div>
  </div>
);
export default About;
