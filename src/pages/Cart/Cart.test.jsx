import React from "react";
import { render } from "@testing-library/react";
import Cart from "./Cart";

const setup = () => render(<Cart />);

describe("when Cart load", () => {
  test("should render the wrapper", () => {
    const { getByTestId } = setup();
    expect(getByTestId("cart-wrapper")).toBeInTheDocument();
  });
});
