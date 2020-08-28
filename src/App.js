import React from "react";
import Jumbo from "./components/Jumbo";
import Search from "./components/Search";
import Table from "./components/Table";

const App = () => {
  return (
    <div className="text-center">
      <Jumbo />
      <Search />
      <Table />
    </div>
  );
};

export default App;
