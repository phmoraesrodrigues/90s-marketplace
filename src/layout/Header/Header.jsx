import React from "react";
import { Link } from "react-router-dom";

const cartItems = () => [];

const Header = () => (
  <header data-testid="header-wrapper">
    <div data-testid="header-logo">90s shop</div>
    <nav data-testid="header-nav">
      <ul style={{ listStyleType: "none", display: "flex" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        |
        <li>
          <Link to="/cart">Cart ({cartItems().length})</Link>
        </li>
      </ul>
    </nav>
    <hr />
  </header>
);

export default Header;
