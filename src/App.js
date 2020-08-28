import React from "react";
import Jumbo from "./components/Jumbo";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";

const App = () => {
  return (
    <div className="text-center">
      <Jumbo />
      <SearchBar />
      <Table />
    </div>
  );
};

export default App;
