import React, { useReducer } from "react";
import mainContext from "./main-context";
import { mainReducer } from "../reducers/mainReducer";
import { listOfPersons } from "../db/listOfPersons";
const MainState = (props) => {
  const [list, dispatch] = useReducer(mainReducer, [...listOfPersons]);

  return (
    <mainContext.Provider
      value={{
        list,
        dispatch,
      }}
    >
      {props.children}
    </mainContext.Provider>
  );
};

export default MainState;
