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
      filteredEmployees: [],
      loading: true,
      error: "",
    };
  }

  async componentDidMount() {
    const { data } = await axios.get(API_URL);
    const employees = data.results;

    this.setState({
      employees,
      filteredEmployees: employees,
      loading: false,
      error: "",
    });
  }

  handleOnChange = (event) => {
    const { employees } = this.state;
    const filterBy = event.target.value;
    const filteredEmployees = employees.filter((employee) => {
      const lastName = employee.name.last;
      const firstName = employee.name.first;

      return firstName.includes(filterBy) || lastName.includes(filterBy);
    });

    this.setState({
      filteredEmployees,
    });
  };

  renderTable() {
    const { loading, error, filteredEmployees } = this.state;

    if (!loading && !error) {
      return <Table rows={filteredEmployees} />;
    }
    return null;
  }

  render() {
    return (
      <div className="container">
        <SearchBar onChange={this.handleOnChange} />
        {this.renderTable()}
      </div>
    );
  }
}

export default App;
