import React from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Image, Button } from "antd";
import { ShoppingCartOutlined, RightCircleOutlined } from "@ant-design/icons";
import cartTypes from "../../store/types/cartType";
import products from "../../data/products";
import { currencyFormat } from "../../utils/numberUtil";
import "./Product.scss";

const Product = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const { id: productId } = useParams();
  const product = products.find((_product) => _product.uid === productId);

  if (!product) {
    return <Redirect to="/404" />;
  }

  const { id, name, description, price, picture } = product;

  const isItemAddedToCart = cartItems.indexOf(id) !== -1;

  const addToCart = (itemId) => {
    dispatch({ type: cartTypes.ADD_TO_CART, payload: itemId });
  };

  const itemButton = isItemAddedToCart ? (
    <Link to="/cart">
      <Button
        data-testid="product-proceedToCheckout"
        block
        size="large"
        type="primary"
        icon={<RightCircleOutlined />}
      >
        Proceed to checkout
      </Button>
    </Link>
  ) : (
    <Button
      data-testid="product-addToCard"
      onClick={() => addToCart(id)}
      block
      size="large"
      type="primary"
      icon={<ShoppingCartOutlined />}
    >
      Add to cart
    </Button>
  );

  return (
    <div data-testid="product-wrapper">
      <h2 data-testid="product-name">{name}</h2>
      <Row gutter={16}>
        <Col xs={24} md={16}>
          <Image data-testid="product-picture" src={picture} />
        </Col>
        <Col className="product-details" xs={24} md={8}>
          <p data-testid="product-description">{description}</p>
          <h3>
            Price: <em data-testid="product-price">{currencyFormat(price)}</em>
          </h3>
          {itemButton}
        </Col>
      </Row>
    </div>
  );
};

export default Product;
