import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import Home from "../../pages/Home";
import Product from "../../pages/Product";
import Cart from "../../pages/Cart";
import "./Content.scss";

const { Content: StyledContent } = Layout;

const Content = () => (
  <StyledContent data-testid="content-wrapper" className="content-wrapper">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/product/:id" component={Product} />
      <Route path="/cart" component={Cart} />
    </Switch>
  </StyledContent>
);

export default Content;
