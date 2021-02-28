import React from "react";
import { render } from "@testing-library/react";
import NotFound from "./NotFound";

const setup = () => render(<NotFound />);

describe("when NotFound load", () => {
  test("should render the wrapper", () => {
    const { getByTestId } = setup();
    expect(getByTestId("not.found-wrapper")).toBeInTheDocument();
  });
});
