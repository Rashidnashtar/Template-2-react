import React from "react";
import "./navbar-collapse.styles.css";
const NavbarCollapse = ({ hidden }) => (
  <div
    className={
      hidden ? `navbar navbar-collapse` : `navbar navbar-collapse show`
    }
    id="navbarSupportedContent"
  >
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#home">
          Home
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#services">
          Services
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#portofolio">
          Portofolio
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#pricing">
          Pricing
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contact">
          Contact
        </a>
      </li>
      <li class="nav-item search"></li>
    </ul>
  </div>
);
export default NavbarCollapse;
