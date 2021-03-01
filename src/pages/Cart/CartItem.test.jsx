import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CartItem from "./CartItem";
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

const removeFromCart = jest.fn();

const setup = () => {
  const { id, uid, name, price, picture } = defaultProduct;

  return render(
    <Router>
      <CartItem
        id={id}
        uid={uid}
        name={name}
        price={price}
        picture={picture}
        removeFromCart={removeFromCart}
      />
      ;
    </Router>
  );
};

describe("when CartItem load", () => {
  test("should render the wrapper", () => {
    const { getByTestId } = setup();
    expect(getByTestId("cart.item-wrapper")).toBeInTheDocument();
  });

  test("should render the cover picture", () => {
    const { getByTestId } = setup();
    expect(getByTestId("cart.item-picture")).toBeInTheDocument();
  });

  test("should render the details", () => {
    const { getByTestId } = setup();
    expect(getByTestId("cart.item-details")).toBeInTheDocument();
  });

  test("should render the price", () => {
    const { getByTestId } = setup();
    expect(getByTestId("cart.item-price")).toBeInTheDocument();
  });

  test("should render the price in currency format", () => {
    const { getByTestId } = setup();
    expect(getByTestId("cart.item-price").textContent).toEqual(
      currencyFormat(defaultProduct.price)
    );
  });

  test("should render the remove button", () => {
    const { getByTestId } = setup();
    expect(getByTestId("cart.item-remove")).toBeInTheDocument();
  });
});

describe("when remove button is clicked", () => {
  test("should call removeFromCart", () => {
    const { getByTestId } = setup();
    fireEvent.click(getByTestId("cart.item-remove"));
    expect(removeFromCart).toBeCalled();
  });
});
