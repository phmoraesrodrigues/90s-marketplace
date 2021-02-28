import React from "react";
import { Row, Col } from "antd";
import ProductCard from "../../components/ProductCard";
import products from "../../data/products";

const Home = () => (
  <div data-testid="home-wrapper">
    <h2>Welcome to our shop!</h2>
    <Row gutter={16}>
      {products.map(({ id, uid, name, price, picture }) => (
        <Col key={id} xs={24} sm={12} md={6}>
          <ProductCard uid={uid} name={name} price={price} picture={picture} />
        </Col>
      ))}
    </Row>
  </div>
);

export default Home;
