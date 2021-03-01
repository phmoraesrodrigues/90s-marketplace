import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Empty, Button, Card, notification, Space } from "antd";
import { Link } from "react-router-dom";
import { RightCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import CartItem from "./CartItem";
import products from "../../data/products";
import { currencyFormat } from "../../utils/numberUtil";
import cartTypes from "../../store/types/cartType";

const totalValue = (cartItems) =>
  cartItems.reduce((total, item) => {
    const { price } = products.find((product) => product.id === item);
    return total + price;
  }, 0);

const openNotification = () => {
  notification.open({
    message: "Not Implemented",
    description: "Soon we'll be accepting payments!",
  });
};

const renderEmptyCart = () => (
  <>
    <Empty
      data-testid="cart-empty.state"
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description={<span>Your shopping cart is empty.</span>}
    >
      <Link to="/">
        <Button size="large" type="primary">
          Browse Products
        </Button>
      </Link>
    </Empty>
  </>
);

const renderItems = (cartItems, clearCart, removeFromCart) => {
  return (
    <>
      <h2>
        <Space>
          Cart (
          <em data-testid="cart-count.items">
            {cartItems.length} product{cartItems.length !== 1 && "s"}
          </em>
          )
          <Button
            data-testid="cart-clear"
            type="primary"
            ghost
            size="small"
            onClick={() => clearCart()}
          >
            <DeleteOutlined /> Clear Cart
          </Button>
        </Space>
      </h2>
      <Row gutter={16}>
        <Col xs={24} md={16}>
          {cartItems.map((item) => {
            const { uid, name, price, picture } = products.find(
              (product) => product.id === item
            );
            return (
              <CartItem
                key={item}
                id={item}
                uid={uid}
                name={name}
                price={price}
                picture={picture}
                removeFromCart={removeFromCart}
              />
            );
          })}
        </Col>
        <Col xs={24} md={8}>
          <Card data-testid="cart-summary">
            <h3>Order Summary</h3>
            <h4>
              Total:{" "}
              <em data-testid="cart-total.price">
                {currencyFormat(totalValue(cartItems))}
              </em>
            </h4>
            <Button
              data-testid="product-continueToCheckout"
              size="large"
              type="primary"
              block
              onClick={openNotification}
              icon={<RightCircleOutlined />}
            >
              Continue to Checkout
            </Button>
          </Card>
        </Col>
      </Row>
    </>
  );
};

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartLength = cartItems.length;
  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch({ type: cartTypes.CLEAR_CART });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: cartTypes.REMOVE_FROM_CART, payload: itemId });
  };

  return (
    <div data-testid="cart-wrapper">
      {!cartLength ? renderEmptyCart() : null}
      {cartLength ? renderItems(cartItems, clearCart, removeFromCart) : null}
    </div>
  );
};

export default Cart;
