import React from "react";

const formatName = ({ title, first, last }) => {
  return `${title}. ${first} ${last}`;
};

const formatDate = (date) => {
  return "dob";
};

const renderRow = (row) => {
  return (
    <tr>
      <td>{row.picture.large}</td>
      <td>{formatName(row.name)}</td>
      <td>{row.phone}</td>
      <td>{row.email}</td>
      <td>{formatDate(row.dob.date)}</td>
    </tr>
  );
};

const renderRows = (rows) => {
  return <tbody>{rows.map(renderRow)}</tbody>;
};

const Table = ({ rows }) => {
  return (
    <div className="container">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        {renderRows(rows)}
      </table>
    </div>
  );
};

export default Table;
