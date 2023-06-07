// import logo from "./logo.svg";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ListStudentComponent from "./components/StudentList";
import CreateStudent from "./components/CreateStudent";
import ViewComponent from "./components/ViewComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <HeaderComponent />
          <div className="container mt-5">
            <Switch>
              <Route path="/" exact component={ListStudentComponent}></Route>
              <Route path="/students" component={ListStudentComponent}></Route>
              <Route path="/addstudent/:id" component={CreateStudent}></Route>
              <Route path="/viewstudent/:id" component={ViewComponent}></Route>
              {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
            </Switch>
          </div>
          <FooterComponent />
        </Router>
      </div>
    );
  }
}

export default App;
