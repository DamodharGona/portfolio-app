import React, { useState } from "react";
import HomePage from "./homePage";
import { showContext } from "./context/showCardContext";
import { showDetailsContext } from "./context/showCardContext";

function App() {
  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState({});
  return (
    <showDetailsContext.Provider value={{ showDetails, setShowDetails }}>
      <showContext.Provider value={{ show, setShow }}>
        <HomePage />
      </showContext.Provider>
    </showDetailsContext.Provider>
  );
}

export default App;
