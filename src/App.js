import {useState} from 'react'
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";

import "./App.css";

function App() {
  const [darkMode, toggleDarkMode] = useState(false)
  
  return (
    <div className="App">
      <div>
        <Component1 isDarkMode={darkMode} />
        <Component2 isDarkMode={darkMode}/>
      </div>

      <button onClick={() => toggleDarkMode((prevState) => !prevState)}>
        Change mode
      </button>
    </div>
  );
}

export default App;
