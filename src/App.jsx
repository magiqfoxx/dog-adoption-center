import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Landing from "./components/Landing/Landing";
import Dogs from "./components/Dogs/Dogs";
import Guides from "./components/Guides/Guides";
import Store from "./components/Store/Store";
import Footer from "./components/Footer/Footer";

import "./App.css";

/* Dog images are not the same height 
Scroll to the top after dog is clicked 
landing: the whole image should be a link*/
const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Navigation />
        <Route path="/" exact component={Landing} />
        <Route path="/dogs/" component={Dogs} />
        <Route path="/guides/" component={Guides} />
        <Route path="/store/" component={Store} />
        <Footer />
      </React.Fragment>
    </Router>
  );
};

export default App;
