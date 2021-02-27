import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ProductCard from "./ProductCard";

const setup = () =>
  render(
    <Router>
      <ProductCard />
    </Router>
  );

describe("when ProductCard load", () => {
  test("should render the wrapper", () => {
    const { getByTestId } = setup();
    expect(getByTestId("product.card-wrapper")).toBeInTheDocument();
  });
});
