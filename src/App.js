import { useState } from "react";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <div className="App">
      <h3>{darkMode ? "Dark" : "Light"} Mode</h3>

      <Component1 isDarkMode={darkMode} />

      <button onClick={toggleDarkMode} className="btn">
        Change to {!darkMode ? "dark" : "light"} mode
      </button>
    </div>
  );
}

export default App;
