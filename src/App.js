import React from "react";
import SearchEngine from "./SearchEngine";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center mt-5"> Weather Search Engine </h1>
        <SearchEngine city="Kyiv" />
      </div>
    </div>
  );
}
