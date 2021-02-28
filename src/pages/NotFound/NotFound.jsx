import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div data-testid="not.found-wrapper">
    <h3>404 - Not Found</h3>
    <div>
      <Link to="/">Visit Home</Link>
    </div>
  </div>
);

export default NotFound;
