import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li id="logo">
          <Link to="/">Dog Adoption Center</Link>
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
