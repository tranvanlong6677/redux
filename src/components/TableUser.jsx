import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useEffect, useState } from "react";

const TableUser = () => {
  const [listUser, setListUser] = useState([]);
  const fetchAllUsers = async () => {
    let res = await axios.get("http://localhost:8080/users/all");
    let data = res ? res.data : [];
    console.log(">>> check data", data);
    setListUser(data);
  };
  const handleDeleteUser = async (idUser) => {
    await axios.post(`http://localhost:8080/users/delete/${idUser}`)
    fetchAllUsers();
    return;
  };
  useEffect(() => {
    fetchAllUsers();
  }, []);
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
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <tr key={`${index}-item`}>
                  <td>{item?.id}</td>
                  <td>{item?.email}</td>
                  <td>{item?.username}</td>
                  <td>
                    <Button variant="primary" className="mx-3">
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteUser(item.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default TableUser;
