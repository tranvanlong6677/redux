import React from "react";
import Table from "react-bootstrap/Table";

const TableUser = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>UserName</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          
        </tbody>
      </Table>
    </div>
  );
};

export default TableUser;
