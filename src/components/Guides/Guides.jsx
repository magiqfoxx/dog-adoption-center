import React from "react";
import { Link } from "react-router-dom";

import GuideSlate from "./GuideSlate";

import "./Guides.css";
import guides from "./guides-db";

const Guides = () => {
  function renderGuides(index0, indexEnd) {
    return guides.slice(index0, indexEnd).map(guide => {
      return (
        <GuideSlate
          title={guide.title}
          subtitle={guide.subtitle}
          picture={guide.picture}
          alt={guide.alt}
          key={guide.id}
        />
      );
    });
  }
  return (
    <React.Fragment>
      <section id="section--guides__title" className="section--title">
        <h1>Guides</h1>
        <h2>Read and learn</h2>
      </section>
      <div className="section--break">
        A happy dog is an even happier owner
        <br />
        <hr />
      </div>
      <section id="section--guides__main">
        <div className="guides--slates">{renderGuides(0, 3)}</div>
        <div className="section--break">
          <Link to="/dogs/">
            Be the new home for one of our dogs
            <br />
            <i className="fas fa-chevron-right" />
          </Link>
          <hr />
        </div>
        <div className="guides--slates">{renderGuides(3, 6)}</div>
      </section>
    </React.Fragment>
  );
};

export default Guides;
