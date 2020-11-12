import React from "react";
import { Route } from "react-router";
import NavMenu from "./components/NavMenu";
import Employees from "./components/Employees.js";

function App() {
  return (
    <NavMenu>
      <Route exact path="/" component={Employees} />
      <Route path="/employees" component={Employees} />
    </NavMenu>
  );
}

export default App;
