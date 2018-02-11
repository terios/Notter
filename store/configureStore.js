/**
 * @flow
 */

import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "remote-redux-devtools";
import { createEpicMiddleware } from "redux-observable";

import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";

//import rootEpic from "./epics";
import rootReducer from "./reducers";

//const epicMiddleware = createEpicMiddleware(rootEpic);
//const middlewares = [logger, epicMiddleware];

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const navigationMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);

const middlewares = [logger, navigationMiddleware];
function configureStore() {
  const store = createStore(
    rootReducer,
    compose(composeWithDevTools, applyMiddleware)(...middlewares)
  );
  return store;
}

export default configureStore;
