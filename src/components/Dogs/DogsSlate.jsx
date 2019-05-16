import React from "react";

const DogsSlate = props => {
  return (
    <div
      className="slate"
      id={`dog--slate-${props.id}`}
      onClick={e => props.onClick(e)}
    >
      {/*src for the src folder but files in public folder*/}
      <img
        src={process.env.PUBLIC_URL + `/img/dogs/${props.file}.jpeg`}
        alt="dog"
      />
      <h3>
        {props.name}, {props.age}
      </h3>
      <p className="dog--slate--description">{props.about}</p>
    </div>
  );
};

export default DogsSlate;
