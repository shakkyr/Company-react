import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CompanyWorkers from "./components/companyWorkers";
import FronPage from "./components/mainScreen";
import CarList from "./components/carList";
import Shadi from "./components/adminScreen";
import './App.css';
import Employee from "./components/employee";

export default function BasicExample() {
  return (
    <Router>
      <div className="navigation">
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin">Company Co founder</Link>
          </li>
          <li>
            <Link to="/workers">Company Workers</Link>
          </li>
          <li>
            <Link to="/carlist">Car List of 2021</Link>
          </li>
          <li>
            <Link to="/employee">Employee page</Link>
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
          <Route path="/employee">
            <Employee />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
