import React from "react";

import "./DogSlate.css";

const DogsSlate = props => {
  return (
    <div className="slate" id="dog--slate" onClick={e => props.onClick(e)}>
      {/*src for the src folder but files in public folder*/}
      <img src={`../img/dogs/${props.file}.jpeg`} alt="dog" />
      <h3>
        {props.name}, {props.age}
      </h3>
    </div>
  );
};

export default DogsSlate;
