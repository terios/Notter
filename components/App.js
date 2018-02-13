/*
* @flow
*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { BackHandler } from "react-native";

import type { Dispatch as ReduxDispatch } from "redux";
import type { NavigationProp } from "react-navigation";

import {
  StackNavigator,
  TabNavigator,
  addNavigationHelpers,
  NavigationActions
} from "react-navigation";

import { createReduxBoundAddListener } from "react-navigation-redux-helpers";

import routesConfig from "../Routes";

/*export const AppNavigator: any = StackNavigator(
  routesConfig.routes,
  routesConfig.options
);*/
export const AppNavigator: any = TabNavigator(
  routesConfig.routes,
  routesConfig.options
);

type Props = {
  dispatch: ReduxDispatch,
  nav: any
};
class App extends Component<Props> {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { dispatch, nav } = this.props;
    const navigation: NavigationProp = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav,
      addListener: createReduxBoundAddListener("root")
    });

    return <AppNavigator navigation={navigation} />;
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(App);
