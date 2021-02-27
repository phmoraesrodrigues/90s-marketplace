import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./Header.scss";

const { Header: StyledHeader } = Layout;

const cartItems = () => [];

const Header = () => (
  <StyledHeader data-testid="header-wrapper" theme="light">
    <div data-testid="header-logo" className="header-logo">
      90s Shop
    </div>
    <Menu data-testid="header-nav" theme="dark" mode="horizontal">
      <Menu.Item key="home" title="Home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="cart" title="Cart" icon={<ShoppingCartOutlined />}>
        <Link to="/cart">Cart ({cartItems().length})</Link>
      </Menu.Item>
    </Menu>
  </StyledHeader>
);

export default Header;
