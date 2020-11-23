import React from "react";
import { Route } from "react-router";
import NavMenu from "./components/NavMenu";
import Members from "./components/Members.js";
import Tiers from "./components/Tiers.js";
import Facilities from "./components/Facilities.js";
import Equipment from "./components/Equipment.js";
import Employees from "./components/Employees.js";

function App() {
  return (
    <NavMenu>
      <Route exact path="/" component={Members} />
      <Route exact path="/members" component={Members} />
      <Route exact path="/tiers" component={Tiers} />
      <Route exact path="/facilities" component={Facilities} />
      <Route exact path="/equipment" component={Equipment} />
      <Route exact path="/employees" component={Employees} />
    </NavMenu>
  );
}

export default App;
