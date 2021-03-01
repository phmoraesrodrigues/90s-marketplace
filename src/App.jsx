import React from "react";
import { Layout } from "antd";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

const App = () => {
  return (
    <Layout data-testid="app-wrapper">
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
};

export default App;
