import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";

import "./App.css";
import Homescreen from "./Components/Homescreen/homescreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <Homescreen />
        </Route>
        <Route path="aboutUs">hello my nigga</Route>
      </Router>
    </div>
  );
}

export default App;
