/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import AppWithNavigationState from "./components/App";

const store = configureStore();

type Props = {};

class RootApp extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default RootApp;
