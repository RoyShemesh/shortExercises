import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from "react-bootstrap/DropdownButton";
import { DropDownBtn } from "./DropDownBtn";
import Button from "react-bootstrap/Button";
import React, { useRef } from "react";
export function SearchCountry(props) {
  const inputEl = useRef(null);
  const placeCountry = (checkedName, checkedCode) => {
    inputEl.current.value = `${checkedName} ,${checkedCode}`;
  };
  return (
    <>
      <InputGroup className="mb-3">
        <DropDownBtn countries={props.countries} pressFunc={placeCountry} />
        <FormControl
          id="searchCountry"
          placeholder="Enter your lovely country"
          aria-label="Text input with dropdown button"
          ref={inputEl}
          onChange={props.searchFunc}
        ></FormControl>
        <Button onClick={() => props.clearInput(inputEl)} variant="danger">
          X
        </Button>{" "}
      </InputGroup>
    </>
  );
}
