import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import MainState from "../contexts/mainState";
import ListPersons from "./ListPersons";
import AddPerosnForm from "./AddPersonForm";
export default function MainContainer() {
  return (
    <div>
      <MainState>
        <NavBar />
        <AddPerosnForm />
        <SearchBar />
        <ListPersons />
      </MainState>
    </div>
  );
}
