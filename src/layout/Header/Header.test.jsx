import React from "react";
import { render } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import rootReducer from "../../store/reducers";
import Header from "./Header";

const initialState = {
  cart: {
    items: [],
  },
};

const setup = () => {
  const store = createStore(rootReducer, initialState);
  return render(
    <Provider store={store}>
      <Router>
        <Header />
      </Router>
    </Provider>
  );
};

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
