import React from "react";
import { render } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import rootReducer from "../../store/reducers";
import Cart from "./Cart";
import { currencyFormat } from "../../utils/numberUtil";
import products from "../../data/products";

const defaultProduct = (products.length && { ...products[0] }) || {
  id: 1,
  uid: "product",
  name: "Product",
  description: "Description",
  price: 15,
  picture: "about:blank",
};

const initialState = {
  cart: {
    items: [defaultProduct.id],
  },
};

const setup = (items = null) => {
  const state = items
    ? { ...initialState, cart: { items } }
    : { ...initialState };

  const store = createStore(rootReducer, state);
  return render(
    <Provider store={store}>
      <Router>
        <Cart />
      </Router>
    </Provider>
  );
};

describe("when Cart load", () => {
  test("should render the wrapper", () => {
    const { getByTestId } = setup();
    expect(getByTestId("cart-wrapper")).toBeInTheDocument();
  });

  test("should render the empty state with empty cart", () => {
    const { getByTestId } = setup([]);
    expect(getByTestId("cart-empty.state")).toBeInTheDocument();
  });

  test("should render the items count", () => {
    const { getByTestId } = setup();
    expect(getByTestId("cart-count.items")).toBeInTheDocument();
  });

  test("should render the correct items count value", () => {
    const { getByTestId } = setup();
    expect(getByTestId("cart-count.items").textContent).toEqual("1 product");
  });

  test("should render the clear button", () => {
    const { getByTestId } = setup();
    expect(getByTestId("cart-clear")).toBeInTheDocument();
  });

  test("should render the order summary", () => {
    const { getByTestId } = setup();
    expect(getByTestId("cart-summary")).toBeInTheDocument();
  });

  test("should render the price", () => {
    const { getByTestId } = setup();
    expect(getByTestId("cart-total.price")).toBeInTheDocument();
  });

  test("should render the total price in currency format", () => {
    const { getByTestId } = setup();
    expect(getByTestId("cart-total.price").textContent).toEqual(
      currencyFormat(defaultProduct.price)
    );
  });
});
