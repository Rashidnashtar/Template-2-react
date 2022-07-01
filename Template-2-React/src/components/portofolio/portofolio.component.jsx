import React, { useState } from "react";
import "./portofolio.styles.css";
import "../Global-stylingSheet/global.styles.css";

import img1 from "../../assets/images/shuffle-1.jpg";
import img2 from "../../assets/images/shuffle-2.jpg";
import img3 from "../../assets/images/shuffle-3.jpg";
import img4 from "../../assets/images/shuffle-4.jpg";
import img5 from "../../assets/images/shuffle-5.jpg";
import img6 from "../../assets/images/shuffle-6.jpg";
import img7 from "../../assets/images/shuffle-7.jpg";
import img8 from "../../assets/images/shuffle-8.jpg";
const Portofolio = () => {
  const [shuffle, setShuffle] = useState(0);
  return (
    <div id="portofolio" class="portofolio ">
      <div class="container">
        <div class="main-heading">
          <h2>portofolio</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem porro
            ad eligendi , quae vero officia sit nisi voluptates nam ullam!
          </p>
        </div>
        <ul class="shuffle">
          <li
            onClick={() => setShuffle(0)}
            className={shuffle === 0 ? "active" : ""}
          >
            All
          </li>
          <li
            onClick={() => setShuffle(1)}
            className={shuffle === 1 ? "active" : ""}
          >
            Photo
          </li>
          <li
            onClick={() => setShuffle(2)}
            className={shuffle === 2 ? "active" : ""}
          >
            Web
          </li>
          <li
            onClick={() => setShuffle(3)}
            className={shuffle === 3 ? "active" : ""}
          >
            Print
          </li>
        </ul>
        <div class="images-container">
          <div class="box">
            <img src={img1} alt="" />
            <div class="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </div>
          </div>
          <div class="box">
            <img src={img2} alt="" />
            <div class="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </div>
          </div>
          <div class="box">
            <img src={img3} alt="" />
            <div class="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </div>
          </div>
          <div class="box">
            <img src={img4} alt="" />
            <div class="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </div>
          </div>
          <div class="box">
            <img src={img5} alt="" />
            <div class="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </div>
          </div>
          <div class="box">
            <img src={img6} alt="" />
            <div class="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </div>
          </div>
          <div class="box">
            <img src={img7} alt="" />
            <div class="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </div>
          </div>
          <div class="box">
            <img src={img8} alt="" />
            <div class="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portofolio;
