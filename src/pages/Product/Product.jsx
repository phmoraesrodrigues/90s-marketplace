import React from "react";
import { useParams, Redirect } from "react-router-dom";
import products from "../../data/products";

const Product = () => {
  const { id } = useParams();
  const product = products.find((_product) => _product.uid === id);

  if (!product) {
    return <Redirect to="/404" />;
  }

  return (
    <div data-testid="product-wrapper">
      <div>Product {id}</div>
    </div>
  );
};

export default Product;
