import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

const setup = () => render(<App />);

describe("when App load", () => {
  test("should render the wrapper", () => {
    const { getByTestId } = setup();
    expect(getByTestId("app-wrapper")).toBeInTheDocument();
  });
});
