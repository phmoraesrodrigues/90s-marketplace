import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NotFound from "./NotFound";

const setup = () =>
  render(
    <Router>
      <NotFound />
    </Router>
  );

describe("when NotFound load", () => {
  test("should render the wrapper", () => {
    const { getByTestId } = setup();
    expect(getByTestId("not.found-wrapper")).toBeInTheDocument();
  });
});
