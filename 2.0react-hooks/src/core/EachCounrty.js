import Dropdown from "react-bootstrap/Dropdown";
export function EachCountry(props) {
  return (
    <>
      <Dropdown.Item
        onClick={() => props.pressFunc(props.country.name, props.country.code)}
        href="#"
      >
        {props.country.name},{props.country.code}
      </Dropdown.Item>
    </>
  );
}
