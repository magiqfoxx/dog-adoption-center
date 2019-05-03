import React, { useState } from "react";
import { Link } from "react-router-dom";

import DogSlate from "./DogsSlate";

import "./Dogs.css";
import dogs from "./dogs-db";

/* Resize on the spot?*/
const Dogs = () => {
  const [dog, setDog] = useState("");
  //if no chosen dog: .dogs--slates-1: grid-template-columns: 1fr 1fr 1fr 1fr
  //else : slate slate chosen chosen
  //or chosen chosen slate slate
  //animate outro: scale(0.5)
  //animate intro: sclae(2)
  function chooseDog(event) {
    //scroll up to the main bit
    setDog(event.currentTarget); //current dog
    if (dog) {
      dog.classList.remove("chosen-dog");
    }
    return console.log(event.currentTarget.classList.add("chosen-dog"));
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
          onClick={e => chooseDog(e)}
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
      document
        .querySelector(".dogs--slates-1")
        .setAttribute(
          "style",
          "grid-template-areas : 'main main slate slate'  'main main slate slate'"
        );

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
        <div className="dogs--slates dogs--slates-1">{renderDogs(0, 8)}</div>
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
