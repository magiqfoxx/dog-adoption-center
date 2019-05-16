import React from "react";

const Page404 = ({ location }) => (
  <section id="section--404">
    <img
      src="./iconfinder_cat_tied_182515.png"
      alt="cat tagled up in a ball of yarn"
    />
    <h1>Sorry!</h1>
    <h2>
      No match found for <code>"{location.pathname}"</code>
    </h2>
    <br />
    <hr />
    <p>
      Icon made by <a href="https://www.iconfinder.com/iconka">Denis Sazhin</a>{" "}
      licensed by{" "}
      <a href="http://creativecommons.org/licenses/by/3.0/">CC 3.0 BY</a>
    </p>
  </section>
);

export default Page404;
