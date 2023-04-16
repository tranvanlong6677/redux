import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../redux/action/actions";

const TableUser = () => {
  // const [listUser, setListUser] = useState([]);
  const dispatch = useDispatch();
  const listUser = useSelector((state) => {
    return state.user.listUsers;
  });
  const isLoading = useSelector((state) => {
    return state.user.isLoading;
  });
  const isError = useSelector((state) => {
    return state.user.isError;
  });

  const handleDeleteUser = async (idUser) => {
    await axios.post(`http://localhost:8080/users/delete/${idUser}`);
    return;
  };
  useEffect(() => {
    dispatch(fetchAllUsers());
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
          {isError === true ? (
            <>
              <span>Something wrongs, please try again</span>
            </>
          ) : (
            <>
              {isLoading === true ? (
                <>
                  <span>Loading</span>
                </>
              ) : (
                <>
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
                </>
              )}
            </>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default TableUser;
