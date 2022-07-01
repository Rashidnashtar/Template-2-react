import React from "react";
import "./video.styles.css";

const Video = () => (
  <div class="video">
    <video autoplay muted loop>
      <source src="/images/Attackmp4" />
    </video>
    <div class="text">
      <h2>Super Awesome Video Here</h2>
      <p>Its All You Need</p>
      <button>See More</button>
    </div>
  </div>
);
export default Video;
