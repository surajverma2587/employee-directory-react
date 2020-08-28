import React, { Component } from "react";
import axios from "axios";

import SearchBar from "../../components/SearchBar";
import Table from "../../components/Table";

const API_URL = "https://randomuser.me/api/?results=10&nat=gb";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
      loading: true,
      error: "",
    };
  }

  async componentDidMount() {
    const { data } = await axios.get(API_URL);
    const employees = data.results;

    this.setState({
      employees,
      loading: false,
      error: "",
    });
  }

  renderTable() {
    const { loading, error, employees } = this.state;

    if (!loading && !error) {
      return <Table rows={employees} />;
    }
    return null;
  }

  render() {
    return (
      <div className="container">
        <SearchBar />
        {this.renderTable()}
      </div>
    );
  }
}

export default App;
