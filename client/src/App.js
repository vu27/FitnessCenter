import React from "react";
import { Route } from "react-router";
import Nav from "./components/Nav";
import Members from "./components/member/Members.js";
import Employees from "./components/employee/Employees.js";

function App() {
  return (
    <Nav>
      <Route exact path="/" component={Members} />
      <Route path="/employees" component={Employees} />
    </Nav>
  );
}

export default App;
