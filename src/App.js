import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform.js";
import About from "./Components/About.js";
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
        <Navbar mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
    
          <Textform mode={mode} /> 
        </div>
    </>
  );
}
export default App;
