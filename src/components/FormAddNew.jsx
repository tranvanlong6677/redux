import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormAddNew = () => {
  return (
    <div className="my-5">
      <h1>Form Add New User</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary">Submit</Button>
      </Form>
    </div>
  );
};

export default FormAddNew;
