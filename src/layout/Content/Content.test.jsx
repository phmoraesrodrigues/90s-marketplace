import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./Content";

const setup = () =>
  render(
    <Router>
      <Content />
    </Router>
  );

describe("when Content load", () => {
  test("should render the wrapper", () => {
    const { getByTestId } = setup();
    expect(getByTestId("content-wrapper")).toBeInTheDocument();
  });
});
