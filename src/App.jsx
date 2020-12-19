import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Landing from "./components/Landing/Landing";
import Dogs from "./components/Dogs/Dogs";
import Guides from "./components/Guides/Guides";
import Store from "./components/Store/Store";
import Footer from "./components/Footer/Footer";
import Page404 from "./Page404";

import "./App.css";

/* Dog images are not the same height 
Scroll to the top after dog is clicked 
landing: the whole image should be a link*/
const App = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Switch>
        <Route path={`/`} exact component={Landing} />
        <Route path={`/dogs/`} component={Dogs} />
        <Route path={`/guides/`} component={Guides} />
        <Route path={`/store/`} component={Store} />
        <Route component={Page404} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default App;
