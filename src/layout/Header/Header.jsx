import React from "react";

const cartItems = () => [];

const Header = () => (
  <header data-testid="header-wrapper">
    <div data-testid="header-logo">90s shop</div>
    <nav data-testid="header-nav">
      <ul style={{ listStyleType: "none", display: "flex" }}>
        <li>
          <a href="/">Home</a>
        </li>
        |
        <li>
          <a href="/cart">Cart ({cartItems().length})</a>
        </li>
      </ul>
    </nav>
    <hr />
  </header>
);

export default Header;
