import React, { useState } from "react";
import { Link } from "react-router-dom";

import DogSlate from "./DogsSlate";

import "./Dogs.css";
import { animateChoosenDog, hidePrevious, showDescription } from "./helpers";
import dogs from "./dogs-db";

/* Resize on the spot?*/
const Dogs = () => {
  const [whichDogs, setWhichDogs] = useState("");

  //hide the ugliness on window resize
  window.onresize = function(event) {
    if (whichDogs) {
      hidePrevious(whichDogs);
    }
  };
  function chooseDog(id, section) {
    if (window.innerWidth > 500) {
      const newDogs = animateChoosenDog(id, whichDogs, section);
      //which dogs are hidden
      setWhichDogs(newDogs);
    } else {
      showDescription(id);
    }
  }
  function renderDogs(index0, indexEnd, section) {
    return dogs.slice(index0, indexEnd).map((dog, index) => {
      return (
        <DogSlate
          name={dog.name}
          age={dog.age}
          file={dog.file}
          about={dog.about}
          key={dog.id}
          id={index + index0 + 1}
          onClick={() => chooseDog(index + index0 + 1, section)}
        />
      );
    });
  }

  return (
    <React.Fragment>
      <section id="section--dogs__title" className="section--title">
        <h1>The beginning of a great companionship</h1>
        <hr />
      </section>
      <section id="section--dogs__main" className="dogs--section__dogs">
        <div className="dogs--slates dogs--slates-1">{renderDogs(0, 8, 1)}</div>
        <div className="section--break">
          <h3>
            <Link to="/guides/">
              Not sure if you're ready? Read one of our guides
              <br />
              <i className="fas fa-chevron-right" />
            </Link>
          </h3>
          <hr />
        </div>
        <div className="dogs--slates dogs--slates-2">
          {renderDogs(8, 14, 2)}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Dogs;
