import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";

const setup = () =>
  render(
    <Router>
      <Header />
    </Router>
  );

describe("when Header load", () => {
  test("should render the wrapper", () => {
    const { getByTestId } = setup();
    expect(getByTestId("header-wrapper")).toBeInTheDocument();
  });

  test("should render the logo", () => {
    const { getByTestId } = setup();
    expect(getByTestId("header-logo")).toBeInTheDocument();
  });

  test("should render the nav", () => {
    const { getByTestId } = setup();
    expect(getByTestId("header-nav")).toBeInTheDocument();
  });
});
