/**
 * @flow
 */

const initialState = AppNavigator =>
  AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams("Main")
  );

export default initialState;
