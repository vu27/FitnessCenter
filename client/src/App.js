import React from "react";
import { Route } from "react-router";
import Home from "./components/Home";
import Employee from "./components/employee/Employee";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/employees" component={Employee} />
    </div>
  );
}

export default App;
