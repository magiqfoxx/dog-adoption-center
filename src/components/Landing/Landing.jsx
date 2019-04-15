import React from "react";
import { Link } from "react-router-dom";

import "./Landing.css";

const Landing = () => {
  return (
    <React.Fragment>
      <section id="landing--section__title" />
      <section id="landing--section__links">
        <div id="landing--links__dogs" className="landing--links">
          <Link to="/dogs/" className="section--links">
            Meet the dogs
            <i className="fas fa-long-arrow-alt-right" />
          </Link>
        </div>
        <div id="landing--links__guides" className="landing--links">
          <Link to="/guides/" className="section--links">
            Read our guides
            <i className="fas fa-long-arrow-alt-right" />
          </Link>
        </div>
        <div id="landing--links__store" className="landing--links">
          <Link to="/store/" className="section--links">
            Visit the store
            <i className="fas fa-long-arrow-alt-right" />
          </Link>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Landing;
