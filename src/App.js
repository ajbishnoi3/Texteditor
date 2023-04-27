import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform.js";
import About from "./Components/About.js";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Textform mode={mode} />
          <About mode={mode} />
        </div>
      </Router>
    </>
  );
}
export default App;
