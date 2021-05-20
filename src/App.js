import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";

import OurProjects from "./components/pages/OurProjects";
import NewsAri from "./components/pages/NewsAri";
import FreshProducts from "./components/pages/FreshProducts";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/OurProjects" component={OurProjects} />
          <Route path="/FreshProducts" component={FreshProducts} />
          <Route path="/NewsAri" component={NewsAri} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
