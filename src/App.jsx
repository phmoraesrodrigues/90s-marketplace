import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import "./App.scss";

function cartItems() {
  return [];
}

function App() {
  return (
    <main data-testid="app-wrapper">
      <Header />
      {window.location.pathname === "/" && (
        <div>
          Welcome to our shop!
          <p>
            You are probably interested in <a href="/products/a">A</a>.
          </p>
          <p>
            Check out the newest product <a href="/products/b">B</a>!
          </p>
        </div>
      )}
      {window.location.pathname === "/products/b" && (
        <div>
          <h1>Product B</h1>
          <p>Price: 30 USD</p>
          <button onClick={() => console.warn("Not implemented!")}>
            Add to cart
          </button>
        </div>
      )}
      {window.location.pathname === "/products/a" && (
        <div>
          <h1>Product A</h1>
          <p>Price: 10 USD</p>
          <button onClick={() => console.warn("Not implemented!")}>
            Add to cart
          </button>
        </div>
      )}
      {window.location.pathname === "/cart" && (
        <div>
          Are you ready to purchase these?
          <ul>
            {cartItems().map((cartItem) => (
              <li key={cartItem}>{cartItem}</li>
            ))}
          </ul>
        </div>
      )}
      <Footer />
    </main>
  );
}

export default App;
