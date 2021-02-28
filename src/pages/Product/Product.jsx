import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { Row, Col, Image, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import products from "../../data/products";
import { currencyFormat } from "../../utils/numberUtil";
import "./Product.scss";

const addToCart = (id) => {
  console.log(id);
};

const Product = () => {
  const { id: productId } = useParams();
  const product = products.find((_product) => _product.uid === productId);

  if (!product) {
    return <Redirect to="/404" />;
  }

  const { id, name, description, price, picture } = product;

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
        </Col>
      </Row>
    </div>
  );
};

export default Product;
