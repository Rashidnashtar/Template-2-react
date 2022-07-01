import React from "react";
import "./pricing.styles.css";

const Pricing = () => (
  <div id="pricing" class="pricing">
    <div class="container">
      <div class="main-heading">
        <h2>pricing</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          accusantium ipsam consequatur quisquam ullam. Possimus in aperiam
          natus quibusdam officia.
        </p>
      </div>
      <div class="planes">
        <div class="plan">
          <div class="head">
            <h3>Basic</h3>
            <span>19</span>
          </div>
          <ul>
            <li>Feature no 1</li>
            <li>Extra Feature</li>
            <li>Extra Feature no 1</li>
            <li>Feature</li>
          </ul>
          <div class="footer">
            <a href="#">Buy Now</a>
          </div>
        </div>
        <div class="plan">
          <div class="head">
            <h3>Premium</h3>
            <span>29</span>
          </div>
          <ul>
            <li>Feature no 1</li>
            <li>Extra Feature</li>
            <li>Extra Feature no 1</li>
            <li>Feature</li>
          </ul>
          <div class="footer">
            <a href="#">Buy Now</a>
          </div>
        </div>
        <div class="plan">
          <div class="head">
            <h3>Pro</h3>
            <span>39</span>
          </div>
          <ul>
            <li>Feature no 1</li>
            <li>Extra Feature</li>
            <li>Extra Feature no 1</li>
            <li>Feature</li>
          </ul>
          <div class="footer">
            <a href="#">Buy Now</a>
          </div>
        </div>
        <div class="plan">
          <div class="head">
            <h3>Platinume</h3>
            <span>49</span>
          </div>
          <ul>
            <li>Feature no 1</li>
            <li>Extra Feature</li>
            <li>Extra Feature no 1</li>
            <li>Feature</li>
          </ul>
          <div class="footer">
            <a href="#">Buy Now</a>
          </div>
        </div>
      </div>
      <p class="contact">Contact us if you hava special request</p>
      <a href="#" class="contact-link">
        Contact Us
      </a>
    </div>
  </div>
);
export default Pricing;
