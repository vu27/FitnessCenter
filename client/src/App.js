import React from "react";
import { Route } from "react-router";
import NavMenu from "./components/NavMenu";
import Members from "./components/Members.js";
import Tiers from "./components/Tiers.js";
import Employees from "./components/Employees.js";

function App() {
  return (
    <NavMenu>
      <Route exact path="/" component={Members} />
      <Route exact path="/members" component={Members} />
      <Route exact path="/tiers" component={Tiers} />
      <Route path="/employees" component={Employees} />
    </NavMenu>
  );
}

export default App;
