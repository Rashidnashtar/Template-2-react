import React from "react";
import "./design.styles.css";
import image from "../../assets/images/mobile.png";
const Design = () => (
  <div class="design">
    <div class="image">
      <img src={image} alt="Mobile" />
    </div>
    <div class="text">
      <h2>Our Design Comes With</h2>
      <ul>
        <li>
          <span>
            <i class="bi bi-display"></i>
          </span>{" "}
          Responsive Design
        </li>
        <li>
          <span>
            <i class="bi bi-display"></i>
          </span>{" "}
          Modern And Clean Design
        </li>
        <li>
          <span>
            <i class="bi bi-display"></i>
          </span>{" "}
          Clean Code
        </li>
        <li>
          <span>
            <i class="bi bi-display"></i>
          </span>{" "}
          Browser Friendly
        </li>
      </ul>
    </div>
  </div>
);
export default Design;
