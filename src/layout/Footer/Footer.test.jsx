import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

const setup = () => render(<Footer />);

describe("when Footer load", () => {
  test("should render the wrapper", () => {
    const { getByTestId } = setup();
    expect(getByTestId("footer-wrapper")).toBeInTheDocument();
  });

  test("should render the copyright", () => {
    const { getByTestId } = setup();
    expect(getByTestId("footer-copyright")).toBeInTheDocument();
  });
});
