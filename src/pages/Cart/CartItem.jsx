import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Button, Image } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";
import { currencyFormat } from "../../utils/numberUtil";
import "./Cart.scss";

const CartItem = ({ id, uid, name, price, picture, removeFromCart }) => {
  return (
    <Row data-testid="cart.item-wrapper" key={id} gutter={16}>
      <Col xs={12} md={8}>
        <Link to={`/product/${uid}`}>
          <Image data-testid="cart.item-picture" src={picture} />
        </Link>
      </Col>
      <Col
        data-testid="cart.item-details"
        className="cart-item-details"
        xs={12}
        md={16}
      >
        <Link to={`/product/${uid}`}>
          <h3>{name}</h3>
        </Link>
        <p>
          Price: <em data-testid="cart.item-price">{currencyFormat(price)}</em>
        </p>
        <p>
          <Button
            data-testid="cart.item-remove"
            type="primary"
            size="small"
            ghost
            onClick={() => removeFromCart(id)}
          >
            <DeleteOutlined /> Remove Item
          </Button>
        </p>
      </Col>
    </Row>
  );
};

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  uid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartItem;
