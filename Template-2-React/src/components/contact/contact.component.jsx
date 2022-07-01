import React from "react";

import "./contact.styles.css";

const Contact = () => (
  <div id="contact" class="contact">
    <div class="container">
      <div class="main-heading">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
          asperiores aliquid, laborum obcaecati veniam reprehenderit inventore
          optio odit maxime? Vel.
        </p>
      </div>
      <div class="content">
        <form action="">
          <input
            type="text"
            name="name"
            class="main-input"
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            class="main-input"
            placeholder="Your Email"
          />
          <textarea
            name="message"
            class="main-input"
            placeholder="Your Mesaage"
          ></textarea>
          <input type="submit" value="Send Message" />
        </form>
        <div class="info">
          <h4>Get In Touch</h4>
          <span class="phone">++001 232 123 233</span>
          <span class="phone">++001 232 123 233</span>
          <h4>Where We Are</h4>
          <address>
            Awesome Address 17 <br />
            Damascuse,syr <br />
            123-234-945 <br />
            SAR
          </address>
        </div>
      </div>
    </div>
  </div>
);
export default Contact;
