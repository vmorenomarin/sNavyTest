import { Navbar } from "./components/Navbar";
import React from "react";
import { Showcase } from "./components/Showcase";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { AddShip } from "./components/AddShip";
import { UpdateShip } from "./components/UpdateShip";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Showcase />} />
          <Route path="/add" element={<AddShip />} />
          <Route path="/update/:id" element={<UpdateShip/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
