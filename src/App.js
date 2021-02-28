import { useContext, useState } from "react";
import Component1 from "./components/Component1";

import {useAppContext} from './store/AppContext'

import "./App.css";

function App() {
  const {isDarkMode, setIsDarkMode} = useAppContext()

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <div className="App">
      <h3>{isDarkMode ? "Dark" : "Light"} Mode</h3>

      <Component1/>

      <button onClick={toggleDarkMode} className="btn">
        Change to {!isDarkMode ? "dark" : "light"} mode
      </button>
    </div>
  );
}

export default App;
