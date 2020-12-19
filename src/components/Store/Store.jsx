import React from "react";

import "./Store.css";

const Store = () => {
  return (
    <React.Fragment>
      <section id="section--store__title" className="section--title">
        <h1>Everything you and your four-legged friend might need</h1>
      </section>
      <section id="section--store__main">
        <div className="section--break">
          Treats and tricks
          <br />
          <hr />
        </div>
        <div className="store--main" id="store--main-1">
          <div className="slate dog--slate">
            <img
              src={`${process.env.PUBLIC_URL}/img/store/photo-1488569098285-adeecb95641f.jpeg`}
              alt="dog sniffing a dog treat"
            />
          </div>
          <div className="slate dog--slate">
            <img
              src={
                process.env.PUBLIC_URL +
                "/img/store/photo-1516734212186-a967f81ad0d7.jpeg"
              }
              alt="dog taking a bath"
            />
          </div>
        </div>
        <div className="section--break">
          Leashes and harnesses
          <br />
          <hr />
        </div>
        <div className="store--main" id="store--main-2">
          <div className="slate dog--slate">
            <img
              src={
                process.env.PUBLIC_URL +
                "/img/store/photo-1551137583-0ef42a5139ce.jpeg"
              }
              alt="dog on a leash"
            />
          </div>
        </div>
        <div className="section--break">
          And other...
          <br />
          <hr />
        </div>
        <div className="store--main" id="store--main-3">
          <div className="slate dog--slate">
            <img
              src={
                process.env.PUBLIC_URL +
                "/img/store/photo-1477884143921-51d0a574ee09.jpeg"
              }
              alt="dog chewing on a toy"
            />
          </div>
          <div className="slate dog--slate">
            <img
              src={
                process.env.PUBLIC_URL +
                "/img/store/photo-1508948956644-0017e845d797.jpeg"
              }
              alt="dog running with a ball"
            />
          </div>
          <div className="slate dog--slate">
            <img
              src={
                process.env.PUBLIC_URL +
                "/img/store/photo-1518213421517-a830ab67694c.jpeg"
              }
              alt="dog gently biting a dog treat"
            />
          </div>
          <div className="slate dog--slate">
            <img
              src={
                process.env.PUBLIC_URL +
                "/img/store/photo-1521673461164-de300ebcfb17.jpeg"
              }
              alt="dog lounging on a couch"
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Store;
