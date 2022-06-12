import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
        <Route exact path="/checkout" element={ [<Checkout/>]}/>
        <Route exact path="/" element={ [<Home/>]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
