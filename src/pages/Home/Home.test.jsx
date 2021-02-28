import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import products from "../../data/products";

const setup = () =>
  render(
    <Router>
      <Home />
    </Router>
  );

describe("when Home load", () => {
  test("should render the wrapper", () => {
    const { getByTestId } = setup();
    expect(getByTestId("home-wrapper")).toBeInTheDocument();
  });

  test("should render the products", () => {
    const { getAllByTestId } = setup();
    expect(getAllByTestId("product.card-wrapper").length).toEqual(
      products.length
    );
  });
});
