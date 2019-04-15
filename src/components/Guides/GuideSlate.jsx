import React from "react";
import { Link } from "react-router-dom";

const GuideSlate = props => {
  return (
    <div className="slate">
      <img src={props.picture} alt={props.alt} />
      <div className="slate__contents">
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
        <Link to="#">
          <i className="far fa-arrow-alt-circle-right" />
        </Link>
      </div>
    </div>
  );
};

export default GuideSlate;
