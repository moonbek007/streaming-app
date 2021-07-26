import { createStore } from "redux";

const reducer = (state, action) => {
  return state;
};

const state = {
  isLoggedIn: false,
  activeLink: "login",
  favourites: [],
  friends: [],
  notifications: [],
};

const store = createStore(reducer, state);

export default store;
