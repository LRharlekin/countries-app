import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/Homepage";
import CountryPage from "./pages/CountryPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/country/:cioc" element={<CountryPage />} />
      </Routes>
    </>
  );
  // return (
  //   <div className="App">
  //     <Navbar />
  //     <CountryPage />
  //   </div>
  // );
}

export default App;
