import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PlusSquareOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import { currencyFormat } from "../../utils/numberUtil";

const ProductCard = ({ uid, name, price, picture }) => (
  <Card
    data-testid="product.card-wrapper"
    cover={<img data-testid="product.card-cover" alt={name} src={picture} />}
  >
    <h3 data-testid="product.card-name">{name}</h3>
    <p>
      Price: <em data-testid="product.card-price">{currencyFormat(price)}</em>
    </p>
    <Link to={`/product/${uid}`}>
      <Button block type="primary" icon={<PlusSquareOutlined />}>
        View details
      </Button>
    </Link>
  </Card>
);

ProductCard.propTypes = {
  uid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
};

export default ProductCard;
