import React, { Component } from "react";
import Main from "./containers/Main";
import fontawesome from "@fortawesome/fontawesome";
import solids from "@fortawesome/fontawesome-free-solid";
import "./App.css";

fontawesome.library.add(solids);

class App extends Component {
  render() {
    return <Main />;
  }
}

export default App;
