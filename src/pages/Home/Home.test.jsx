import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

const setup = () => render(<Home />);

describe("when Home load", () => {
  test("should render the wrapper", () => {
    const { getByTestId } = setup();
    expect(getByTestId("home-wrapper")).toBeInTheDocument();
  });
});
