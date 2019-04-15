import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li id="logo">
          <Link to="/">DAC</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/guides">Guides</Link>
        </li>
        <li>
          <Link to="/dogs">Dogs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
