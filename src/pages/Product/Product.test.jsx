import React from "react";
import { render } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Route, Switch, MemoryRouter } from "react-router-dom";
import rootReducer from "../../store/reducers";
import Product from "./Product";
import products from "../../data/products";
import { currencyFormat } from "../../utils/numberUtil";

const defaultProduct = (products.length && { ...products[0] }) || {
  id: 1,
  uid: "product",
  name: "Product",
  description: "Description",
  price: 15,
  picture: "about:blank",
};

const initialState = {
  cart: {
    items: [defaultProduct.id],
  },
};

const setup = () => {
  const store = createStore(rootReducer, initialState);

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[`/product/${defaultProduct.uid}`]}>
        <Switch>
          <Route path="/product/:id" component={Product} />
        </Switch>
      </MemoryRouter>
    </Provider>
  );
};

describe("when Product load", () => {
  test("should render the wrapper", () => {
    const { getByTestId } = setup();
    expect(getByTestId("product-wrapper")).toBeInTheDocument();
  });

  test("should render the name", () => {
    const { getByTestId } = setup();
    expect(getByTestId("product-name")).toBeInTheDocument();
  });

  test("should render the picture", () => {
    const { getByTestId } = setup();
    expect(getByTestId("product-picture")).toBeInTheDocument();
  });

  test("should render the price", () => {
    const { getByTestId } = setup();
    expect(getByTestId("product-price")).toBeInTheDocument();
  });

  test("should render the price in currency format", () => {
    const { getByTestId } = setup();
    expect(getByTestId("product-price").textContent).toEqual(
      currencyFormat(defaultProduct.price)
    );
  });
});
