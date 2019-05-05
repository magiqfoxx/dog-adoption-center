import React from "react";
import { Link } from "react-router-dom";

import "./Landing.css";

const Landing = () => {
  return (
    <React.Fragment>
      <section id="landing--section__title" />
      <section id="landing--section__links">
        <Link to="/dogs/" id="landing--link__dogs" className="section--links">
          <div id="landing--links__dogs" className="landing--links">
            <h2>Meet the dogs</h2>
            <i className="fas fa-long-arrow-alt-right" />
          </div>
        </Link>
        <Link
          to="/guides/"
          id="landing--link__guides"
          className="section--links"
        >
          <div id="landing--links__guides" className="landing--links">
            <h2>Read our guides</h2>
            <i className="fas fa-long-arrow-alt-right" />
          </div>
        </Link>
        <Link to="/store/" id="landing--link__store" className="section--links">
          <div id="landing--links__store" className="landing--links">
            <h2>Visit the store</h2>
            <i className="fas fa-long-arrow-alt-right" />
          </div>
        </Link>
      </section>
    </React.Fragment>
  );
};

export default Landing;
