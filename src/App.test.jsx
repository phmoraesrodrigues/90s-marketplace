import React from "react";
import { render } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import rootReducer from "./store/reducers";

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
        <App />
      </Router>
    </Provider>
  );
};

describe("when App load", () => {
  test("should render the wrapper", () => {
    const { getByTestId } = setup();
    expect(getByTestId("app-wrapper")).toBeInTheDocument();
  });
});
