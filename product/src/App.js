import React from "react";
import {Router} from '@reach/router';
import "./App.css";
import Form from "./components/Form";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Router>
    <Products path="/"/>
    <Form path="/new"/>
      </Router>
    </div>
  );
}

export default App;
