import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import mainContext from "../contexts/main-context";

export default function AddPerosnForm(props) {
  const { dispatch } = useContext(mainContext);
  const [newName, setNewName] = useState();
  const [newAge, setNewAge] = useState();
  const handleChangeName = (e) => {
    setNewName(e.target.value);
  };
  const handleChangeAge = (e) => {
    setNewAge(e.target.value);
  };
  const handleClick = (e) => {
    dispatch({ type: "ADD_PERSON", payload: { name: newName, age: newAge } });
  };
  return (
    <Form.Group
      style={{ margin: "0 auto", width: "50%" }}
      className="mb-3"
      controlId="formBasicEmail"
    >
      <h2>Add Person</h2>
      <Form.Label>Person Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter person name"
        onChange={(e) => handleChangeName(e)}
      />
      <Form.Label>Person Age</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter person age"
        onChange={(e) => handleChangeAge(e)}
      />
      <Button onClick={(e) => handleClick(e)} variant="primary" type="submit">
        Submit
      </Button>
    </Form.Group>
  );
}
