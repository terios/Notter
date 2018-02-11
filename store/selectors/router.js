/**
 * @flow
 */

const initialState = (AppNavigator: any) =>
  AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams("Main")
  );

export default initialState;
