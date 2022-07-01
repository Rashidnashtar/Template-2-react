import React, { useState } from "react";
import "./landing.styles.css";

const Landing = () => {
  const [bulletsMap, setBulletsMap] = useState(1);
  const setBackground = () => {
    if (bulletsMap === 1) {
      return "first";
    }
    if (bulletsMap === 2) return "secound";
    if (bulletsMap === 3) return "third";
  };
  return (
    <div id="home" className={`landing ${setBackground()}`}>
      <div class="overlay"></div>
      <div class="text">
        <div class="content">
          <h2>
            Hello World! <br />
            We Are Raspar We Make Art
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
            exercitationem impedit sint consectetur maxime ipsa ipsum ut ipsam
            obcaecati. Debitis tempore doloribus, eligendi iure commodi a ut
            ratione quae quod.
          </p>
        </div>
      </div>
      <i
        onClick={() => {
          setBulletsMap((((bulletsMap % 3) + 3) % 3) + 1);
        }}
        class="right bi bi-caret-right-fill centering"
      ></i>
      <i
        onClick={() => {
          bulletsMap === 3
            ? setBulletsMap(2)
            : bulletsMap === 1
            ? setBulletsMap(3)
            : setBulletsMap((((bulletsMap % 3) + 3) % 3) - 1);
        }}
        class="left bi bi-caret-left-fill centering fs-lg"
      ></i>
      <ul class="bullets">
        <li
          onClick={() => setBulletsMap(1)}
          className={bulletsMap === 1 ? `active` : ""}
        ></li>
        <li
          className={bulletsMap === 2 ? `active` : ""}
          onClick={() => setBulletsMap(2)}
        ></li>
        <li
          className={bulletsMap === 3 ? `active` : ""}
          onClick={() => setBulletsMap(3)}
        ></li>
      </ul>
    </div>
  );
};

export default Landing;
