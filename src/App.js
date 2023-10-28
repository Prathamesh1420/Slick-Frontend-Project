import "./App.css";
import React, { useState } from "react";
import Filter from "./Componenets/FilterComp";
import Table from "./Componenets/TableComp";
function App() {
  const [inputValue, setInputValue] = useState([]);
  console.log(inputValue);
  function getValue(input) {
    setInputValue(input);
  }
  return (
    <div className="App">
      <div>
        <Filter valueChange={getValue}></Filter>
        <Table tableValue={inputValue}></Table>
      </div>
    </div>
  );
}

export default App;
