/*
* @flow
*/

import { combineReducers } from "redux";
import navReducer from "./Navigation";

const rootReducer = combineReducers({
  // appData,
  nav: navReducer
});

export default rootReducer;
