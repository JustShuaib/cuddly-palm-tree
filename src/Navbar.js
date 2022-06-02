import React, { useState } from "react";
import "./Sass/navbar.scss";
import hamburger from "./images/icon-hamburger.svg";
import close from "./images/icon-close.svg";
function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="nav">
      <button
        aria-label="menu"
        className="hamburger"
        onClick={() => setNavOpen(true)}
      >
        <img src={hamburger} alt="" />
      </button>
      <p>room</p>
      <div className={navOpen ? "nav-list show-nav-list" : "nav-list"}>
        <button
          aria-label="close menu"
          className="close-btn"
          onClick={() => setNavOpen(false)}
        >
          <img src={close} alt="" />
        </button>
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
