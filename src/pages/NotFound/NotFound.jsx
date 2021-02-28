import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div data-testid="not.found-wrapper">
    <h2>404 - Not Found</h2>
    <div>
      <Link to="/">Visit Home</Link>
    </div>
  </div>
);

export default NotFound;
