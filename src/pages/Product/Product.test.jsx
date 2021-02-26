import React from "react";
import { render } from "@testing-library/react";
import Product from "./Product";

const setup = () => render(<Product />);

describe("when Product load", () => {
  test("should render the wrapper", () => {
    const { getByTestId } = setup();
    expect(getByTestId("product-wrapper")).toBeInTheDocument();
  });
});
