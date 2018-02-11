/**
 * @flow
 */

import initialState from "../selectors/router";
import { AppNavigator } from "../../components/App";

const initStateResult = initialState(AppNavigator);
const navReducer = (state: any = initStateResult, action: any) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

export default navReducer;
