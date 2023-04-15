import React from "react";
import Header from "./Header";
import TableUser from "./TableUser";
import Container from "react-bootstrap/Container";
import FormAddNew from "./FormAddNew";

const Home = (props) => {
  return (
    <div>
      <Header />
      <Container>
        <FormAddNew />
        <TableUser />
      </Container>
    </div>
  );
};

export default Home;
