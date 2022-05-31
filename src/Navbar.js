import React from "react";
import "./Sass/navbar.scss";
import hamburger from "./images/icon-hamburger.svg";
import close from "./images/icon-close.svg";
function Navbar() {
  return (
    <nav className="nav">
      <img src={hamburger} className="hamburger" alt="" />
      <p>room</p>
      <div>
        <img src={close} className="close-btn" alt="" />
        <ul>
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/">shop</a>
          </li>
          <li>
            <a href="/">about</a>
          </li>
          <li>
            <a href="/">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
