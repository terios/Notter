import initialState from "../selectors/router";
import { AppNavigator } from "../../components/App";

const initStateResult = initialState(AppNavigator);
const navReducer = (state = initStateResult, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

export default navReducer;
