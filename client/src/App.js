import React from "react";
import { Route } from "react-router";
import Nav from "./components/Nav";
import Employee from "./components/employee/Employee";

function App() {
  return (
    <Nav>
      <Route exact path="/" component={Employee} />
    </Nav>
  );
}

export default App;
