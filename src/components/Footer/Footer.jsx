import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <hr />
      <div id="footer--links">
        <ul>
          <li>
            <Link to="#">About us</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/guides/">Guides</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/shop/">Shop</Link>
          </li>
          <li>
            <Link to="#">Inventory</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="#">Instagram</Link>
          </li>
          <li>
            <Link to="#">Facebook</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
