import React, { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import mainContext from "../contexts/main-context";
export default function NavBar() {
  const { list } = useContext(mainContext);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>React-useContext-useReducer</Navbar.Brand>
        <Navbar.Brand>Persons count: {list.length}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
