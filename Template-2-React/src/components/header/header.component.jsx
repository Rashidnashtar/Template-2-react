import React, { useState } from "react";
import "./header.stlyles.css";
import NavbarCollapse from "../navbar-collapse/navbar-collapse.component";
const Header = () => {
  const [hidden, setHeddin] = useState(false);
  return (
    <nav class=" header container navbar navbar-expand-lg sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#home">
          Raspar
        </a>
        <button
          onClick={() => setHeddin(!hidden)}
          class="toggler navbar-toggler"
          type="button"
        >
          <span class="navbar-toggler-icon">=</span>
        </button>
        <NavbarCollapse hidden={hidden} />
      </div>
    </nav>
  );
};
export default Header;
