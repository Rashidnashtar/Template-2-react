import React from "react";
import "./footer.styles.css";

const Footer = () => (
  <div class="footer-end">
    <div class="container">
      <span class="fs-4 logo"> Raspar</span>
      <p>We Are Social</p>
      <div class="social">
        <a href="facebook.com">
          <i class="bi bi-facebook"></i>
        </a>
        <a href="twitter.com">
          <i class="bi bi-twitter"></i>
        </a>
        <a href="facebook.com">
          <i class="bi bi-house"></i>
        </a>
        <a href="linkedin.com">
          <i class="bi bi-linkedin"></i>
        </a>
      </div>
      <p class="copyright">
        &copy; 2022 <span>Raspar</span> All Right Reserved
      </p>
    </div>
  </div>
);
export default Footer;
