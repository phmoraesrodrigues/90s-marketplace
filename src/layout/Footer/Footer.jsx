import React from "react";
import { Layout } from "antd";
import "./Footer.scss";

const { Footer: StyledFooter } = Layout;

const Footer = () => (
  <StyledFooter data-testid="footer-wrapper">
    <p data-testid="footer-copyright" className="footer-copyright">
      &copy; Copyright 2021
    </p>
  </StyledFooter>
);

export default Footer;
