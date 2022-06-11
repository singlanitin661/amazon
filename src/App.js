import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route exact path="/checkout" element={ [<Header/> ,<h1>I AM A CHECKOUT PAGE</h1>]}/>
        <Route exact path="/" element={ [<Header /> ,<Home/>]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
