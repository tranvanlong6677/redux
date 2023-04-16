import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers, deleteUserRedux } from "../redux/action/actions";

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
    dispatch(deleteUserRedux(idUser));
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
              <tr>
                <td colSpan={12}>Something wrongs, please try again</td>
              </tr>
            </>
          ) : (
            <>
              {isLoading === true ? (
                <>
                  <tr>
                    <td colSpan={12}>Loading</td>
                  </tr>
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
