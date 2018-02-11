/**
 * @flow
 */

import React, { Component } from "react";
import { Provider } from "react-redux";
/**
 * @flow
 */

import configureStore from "./store/configureStore";
import AppWithNavigationState from "./components/App";

const store = configureStore();

class RootApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default RootApp;
