import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const setup = () =>
  render(
    <Router>
      <App />
    </Router>
  );

describe("when App load", () => {
  test("should render the wrapper", () => {
    const { getByTestId } = setup();
    expect(getByTestId("app-wrapper")).toBeInTheDocument();
  });
});
