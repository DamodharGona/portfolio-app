import React, { useState } from "react";

import { showContext } from "./context/showCardContext";
import { showDetailsContext } from "./context/showCardContext";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";

import HomePage from "./homePage";
import AboutScrollContent from "./screens/aboutScroll";
import HomeScrollContent from "./screens/homeScroll";

function App() {
  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState({});
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        { index: true, element: <HomeScrollContent /> },
        { path: "/aboutScreen", element: <AboutScrollContent /> },
      ],
    },
  ]);
  return (
    <showDetailsContext.Provider value={{ showDetails, setShowDetails }}>
      <showContext.Provider value={{ show, setShow }}>
        <RouterProvider router={router}>
          <HomePage />
        </RouterProvider>
      </showContext.Provider>
    </showDetailsContext.Provider>
  );
}

export default App;
