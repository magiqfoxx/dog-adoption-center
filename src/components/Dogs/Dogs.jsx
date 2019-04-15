import React, { useState } from "react";
import { Link } from "react-router-dom";

import DogSlate from "./DogsSlate";

import "./Dogs.css";
import dogs from "./dogs-db";

const Dogs = () => {
  const [dog, setDog] = useState("");

  function chooseDog(name, age, about, file) {
    //scroll up to the main bit
    setDog({ name, age, about, file });
  }
  function renderDogs(index0, indexEnd) {
    return dogs.slice(index0, indexEnd).map(dog => {
      return (
        <DogSlate
          name={dog.name}
          age={dog.age}
          file={dog.file}
          about={dog.about}
          key={dog.id}
          onClick={chooseDog}
        />
      );
    });
  }
  function renderDog() {
    if (!dog) {
      return (
        <div id="dogs--main__text">
          We're open Mon-Sat between 10am and 5pm but we ask that you give us a
          call before.
        </div>
      );
    } else {
      return (
        <div id="dogs--main__dog">
          <img src={`../../img/dogs/${dog.file}.jpeg`} alt={dog.name} />
          <h3>{dog.name}</h3>
          <p>{dog.about}</p>
        </div>
      );
    }
  }
  return (
    <React.Fragment>
      <section id="section--dogs__title" className="section--title">
        <h1>The beginning of a great companionship</h1>
        <hr />
      </section>
      <section id="section--dogs__main" className="dogs--section__dogs">
        <div className="dogs--slates dogs--slates-1">
          {renderDog()}
          {renderDogs(0, 6)}
        </div>
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
        <div className="dogs--slates dogs--slates-2">{renderDogs(6, 12)}</div>
      </section>
    </React.Fragment>
  );
};

export default Dogs;
