import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Layout, Menu } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./Header.scss";

const { Header: StyledHeader } = Layout;

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <StyledHeader data-testid="header-wrapper" theme="light">
      <div data-testid="header-logo" className="header-logo">
        90s Shop
      </div>
      <Menu
        data-testid="header-nav"
        theme="dark"
        selectable={false}
        mode="horizontal"
      >
        <Menu.Item key="home" title="Home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="cart" title="Cart" icon={<ShoppingCartOutlined />}>
          <Link to="/cart">Cart ({cartItems.length})</Link>
        </Menu.Item>
      </Menu>
    </StyledHeader>
  );
};

export default Header;
