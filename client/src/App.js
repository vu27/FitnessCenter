import React from "react";
import { Route } from "react-router";
import NavMenu from "./components/NavMenu";
import Members from "./components/Members.js";

function App() {
  return (
    <NavMenu>
      <Route exact path="/" component={Members} />
      <Route path="/members" component={Members} />
    </NavMenu>
  );
}

export default App;
