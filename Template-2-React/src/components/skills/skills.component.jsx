import React from "react";
import "./skills.styles.css";
import Testimonials from "../testimonials/testimonials.component";
const Skills = () => (
  <div class="skills">
    <div class="container">
      <Testimonials />
      <div class="ourskills">
        <h3>Skills</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus fugit soluta, doloribus deleniti perferendis eius
          perspiciatis voluptatum harum. At, tempore.
        </p>
        <div class="prg-holder">
          <h4>Adobe</h4>
          <div class="prog">
            <span style={{ width: "90%" }} data-progress="90%"></span>
          </div>
        </div>
        <div class="prg-holder">
          <h4>HTML</h4>
          <div class="prog">
            <span style={{ width: "85%" }} data-progress="85%"></span>
          </div>
        </div>
        <div class="prg-holder">
          <h4>JavaScript</h4>
          <div class="prog">
            <span style={{ width: "80%" }} data-progress="80%"></span>
          </div>
        </div>
        <div class="prg-holder">
          <h4>PHP</h4>
          <div class="prog">
            <span style={{ width: "90%" }} data-progress="90%"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Skills;
