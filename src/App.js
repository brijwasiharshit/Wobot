import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Body from "./components/Body";
import { Outlet } from 'react-router-dom';



function App() {
  
  return (
    <div className="p-4">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
