import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ProductCard from "./ProductCard";
import { currencyFormat } from "../../utils/numberUtil";

const defaultProduct = {
  id: 1,
  uid: "product",
  name: "Product",
  price: 15,
  picture: "about:blank",
};

const setup = () => {
  const { uid, name, price, picture } = defaultProduct;

  return render(
    <Router>
      <ProductCard uid={uid} name={name} price={price} picture={picture} />;
    </Router>
  );
};

describe("when ProductCard load", () => {
  test("should render the wrapper", () => {
    const { getByTestId } = setup();
    expect(getByTestId("product.card-wrapper")).toBeInTheDocument();
  });

  test("should render the cover picture", () => {
    const { getByTestId } = setup();
    expect(getByTestId("product.card-cover")).toBeInTheDocument();
  });

  test("should render the name", () => {
    const { getByTestId } = setup();
    expect(getByTestId("product.card-name")).toBeInTheDocument();
  });

  test("should render the price", () => {
    const { getByTestId } = setup();
    expect(getByTestId("product.card-price")).toBeInTheDocument();
  });

  test("should render the price in currency format", () => {
    const { getByTestId } = setup();
    expect(getByTestId("product.card-price").textContent).toEqual(
      currencyFormat(defaultProduct.price)
    );
  });
});
