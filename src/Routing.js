import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Personal from "./components/personaldetails/Personal";
import Header from "./components/resumebuilder/Header";
import Education from "./components/educationdetails/Education";
import Project from "./components/projectdeveloped/Project";
import Experience from "./components/experiencedetails/Experience";
import Extra from "./components/extradetails/Extra";
import Success from "./components/success/Success";
const Routing = (
  <div>
    <Router>
      <Link to="/"></Link>
      <Route path="/" component={Header}></Route>
      <Route exact path="/" component={Personal}></Route>
      <Route path="/education" component={Education}></Route>
      <Route path="/project" component={Project}></Route>
      <Route path="/experience" component={Experience}></Route>
      <Route path="/extra" component={Extra}></Route>
      <Route path="/success" component={Success}></Route>
    </Router>
  </div>
);

export default Routing;
