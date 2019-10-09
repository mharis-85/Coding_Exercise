import Axios from "axios";
export const USER_DATA = "USER_DATA";
export const ADD_DATA = "ADD_DATA";

//const BASE_URL = "http://localhost:3000";
//-------Action countries List------------//
export const getData = countries => {
  return {
    type: USER_DATA,
    countries
  };
};
//-------Action Form input data------------//
export const addData = user => {
  return {
    type: ADD_DATA,
    user
  };
};
//-------Action creator countries List------------//
export const getUserData = () => {
  return async function getDataFunc(dispatch) {
    try {
      const response = await Axios.get("https://restcountries.eu/rest/v2/all");
      dispatch(getData(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
//-------Action creator Form input data------------//
export const addUserData = user => async dispatch => {
  try {
    dispatch(addData(user));
  } catch (e) {
    console.log(e);
  }
};
