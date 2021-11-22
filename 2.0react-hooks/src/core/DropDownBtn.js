import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { EachCountry } from "./EachCounrty";
import React, { useEffect, useRef } from "react";
export function DropDownBtn(props) {
  return (
    <>
      <DropdownButton autoClose="inside" id="dropDownCountries">
        <div className="overflow-y-scroll max-h-32">
          {props.countries.map((country) => {
            return (
              <EachCountry pressFunc={props.pressFunc} country={country} />
            );
          })}
          <Dropdown.Divider />
        </div>
      </DropdownButton>
    </>
  );
}
