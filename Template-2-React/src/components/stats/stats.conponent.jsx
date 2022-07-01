import React from "react";
import "./stats.styles.css";

const Stats = () => (
  <div class="stats">
    <div class="container">
      <div class="box">
        <i class="bi bi-cup"></i>
        <div class="number">1.236</div>
        <p>Coffee Drinks</p>
      </div>
      <div class="box">
        <i class="bi bi-file-earmark-break"></i>
        <div class="number">256</div>
        <p>Completed Projects</p>
      </div>
      <div class="box">
        <i class="bi bi-envelope-check"></i>
        <div class="number">1,743</div>
        <p>Mail Sent</p>
      </div>
      <div class="box">
        <i class="bi bi-trophy"></i>
        <div class="number">17</div>
        <p>Awards Received</p>
      </div>
    </div>
  </div>
);
export default Stats;
