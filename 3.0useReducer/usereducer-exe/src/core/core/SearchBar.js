import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import mainContext from "../contexts/main-context";
import { listOfPersons } from "../db/listOfPersons";
export default function SearchBar() {
  const { dispatch } = useContext(mainContext);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    initialData();
  }, [filter]);

  const handleChange = (e) => {
    setFilter(e.target.value);
    dispatch({ type: "FILTER_LIST", name: e.target.value });
  };

  const initialData = () => {
    if (filter.length === 0)
      dispatch({ type: "INITIAL_DATA", data: [...listOfPersons] });
  };

  return (
    <Container style={{ margin: "0 auto", width: "50%" }}>
      <Form>
        <h2>Search</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Person Name</Form.Label>
          <Form.Control
            onChange={(e) => {
              handleChange(e);
            }}
            value={filter}
            type="text"
            placeholder="Enter person name"
          />
        </Form.Group>
        {/* <Button variant="primary" type="submit">
          Submit
        </Button> */}
      </Form>
    </Container>
  );
}
