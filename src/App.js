import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import ListPage from "./pages/ListPage";
import CountryPage from "./pages/CountryPage";
import SortTable from "./components/SortTable";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SortTable />
    </div>
  );
}

export default App;
