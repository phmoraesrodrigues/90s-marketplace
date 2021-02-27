import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

const App = () => {
  return (
    <Router>
      <Layout data-testid="app-wrapper">
        <Header />
        <Content />
        <Footer />
      </Layout>
    </Router>
  );
};

export default App;
