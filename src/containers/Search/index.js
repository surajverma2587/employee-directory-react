import React, { Component } from "react";
import SearchBar from "../../components/SearchBar";
import Table from "../../components/Table";

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <Table />
      </div>
    );
  }
}

export default App;
