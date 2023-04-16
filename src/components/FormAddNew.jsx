import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { createNewUserRedux } from "../redux/action/actions";
const FormAddNew = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const handleCreateNewUser = () => {
    dispatch(createNewUserRedux(email, password, username));
    setEmail("");
    setPassword("");
    setUsername("");
  };
  const isCreating = useSelector((state) => state.user.isCreating);
  return (
    <div className="my-5">
      <h1>Form Add New User</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={() => handleCreateNewUser()}
          disabled={isCreating ? true : false}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormAddNew;
