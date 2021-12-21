import { nanoid } from "nanoid";
export const mainReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_DATA":
      return [...action.data];
    case "FILTER_LIST": {
      let stateAfterFilter = state.filter((item) => {
        return item.name.includes(action.name);
      });
      return [...stateAfterFilter];
    }
    case "REMOVE_PERSON": {
      const stateAfterDelete = state.filter(
        (item) => item.id !== action.payload.id
      );
      return [...stateAfterDelete];
    }
    case "ADD_PERSON": {
      const newPerson = { ...action.payload, id: nanoid() };
      return [...state, newPerson];
    }
    case "EDIT_PERSON": {
      const stateAfterEdit = state.map((person) => {
        if (person.id === action.payload.id) {
          person.name = action.payload.name;
        }
        return person;
      });
      console.log(stateAfterEdit);
      return [...stateAfterEdit];
    }
    // case "UPDATE_LIST":
    //   let updatedState = state.map((item) => {
    //     if (item.id === action.id) return { ...item, title: action.title };
    //     return item;
    //   });
    //   return [...updatedState];
    default:
      return [...state];
  }
};
