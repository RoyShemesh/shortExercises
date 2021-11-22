import "./index.css";
import { SearchCountry } from "./core/SearchCountry.js";
import gapProperties from "postcss-gap-properties";
import { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
function App(props) {
  const [countries, setCountries] = useState(props.countries);
  const clearInput = (inputEl) => {
    inputEl.current.value = "";
    setCountries(props.countries);
  };
  const searchCountry = (e) => {
    if (e.target.value === "") {
    } else {
      const searchString = e.target.value;
      const result = props.countries.filter((country) => {
        return country.name.startsWith(searchString);
      });
      setCountries(result);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-green-400 overflow-y-scroll">
      <div className="w-4/5">
        <SearchCountry
          countries={countries}
          searchFunc={searchCountry}
          clearInput={clearInput}
        />
      </div>
    </div>
  );
}

export default App;
