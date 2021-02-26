import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Layout } from "antd";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";

const App = () => {
  return (
    <Router>
      <Layout data-testid="app-wrapper">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
        <Footer />
      </Layout>
    </Router>
  );
};

export default App;
