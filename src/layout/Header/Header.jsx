import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Layout, Menu } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./Header.scss";

const { Header: StyledHeader } = Layout;

const cartItems = () => [];

const Header = () => (
  <StyledHeader data-testid="header-wrapper" theme="light">
    <div className="header-logo">90s Shop</div>
    <Router>
      <Menu
        data-testid="header-nav"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["home"]}
      >
        <Menu.Item key="home" title="Home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="cart" title="Cart" icon={<ShoppingCartOutlined />}>
          <Link to="/cart">Cart ({cartItems().length})</Link>
        </Menu.Item>
      </Menu>
    </Router>
  </StyledHeader>
);

export default Header;
