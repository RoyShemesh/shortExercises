import React, { useContext, useState } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import mainContext from "../contexts/main-context";
import { nanoid } from "nanoid";
import "../styles/main.css";

export default function ListBooks() {
  const { list, dispatch } = useContext(mainContext);
  const [name, setName] = useState();
  const handleDelete = ({ name, age, id }) => {
    dispatch({ type: "REMOVE_PERSON", payload: { name, age, id } });
  };
  const handleEdit = ({ e, item: { name, id, age } }) => {
    const currentName = document.getElementById(id).innerText;
    dispatch({ type: "EDIT_PERSON", payload: { id, name: currentName } });
  };

  return (
    <Container>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <h4 id={item.id} contentEditable>
              {item.name}
            </h4>
            {item.age} years old
            <Button
              variant="outline-danger"
              onClick={(e) => handleDelete(item)}
            >
              X
            </Button>
            <Button
              name="edit"
              variant="outline-info"
              onClick={(e) => handleEdit({ e, item })}
            >
              keep
            </Button>
          </li>
        ))}
      </ul>
    </Container>
  );
}
