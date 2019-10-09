import { USER_DATA, ADD_DATA } from "../actions";

let initialState = {
  user: {},
  countries: []
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA:
      console.log(state.countries.length !== action.countries.length);
      if (state.countries.length !== action.countries.length) {
        return { ...state, countries: action.countries };
      }
      break;
    case ADD_DATA:
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export default userDataReducer;
