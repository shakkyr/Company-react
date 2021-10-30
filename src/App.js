import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CompanyWorkers from "./components/companyWorkers";
import FronPage from "./components/mainScreen";
import CarList from "./components/carList";
import Shadi from "./components/adminScreen";
import "./App.css";

export default function BasicExample() {
  return (
    <Router>
      <div className="navigation">
        <ul className="navbar">
          <li key={1}>
            <Link to="/">Home</Link>
          </li>
          <li key={2}>
            <Link to="/admin">Company Co founder</Link>
          </li>
          <li key={3}>
            <Link to="/workers">Company Workers</Link>
          </li>
          <li key={4}>
            <Link to="/carlist">Car List of 2021</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <FronPage />
          </Route>
          <Route path="/admin">
            <Shadi />
          </Route>
          <Route path="/workers">
            <CompanyWorkers />
          </Route>
          <Route path="/carlist">
            <CarList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
