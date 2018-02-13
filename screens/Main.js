import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import type { NavigationProp } from "react-navigation";

import TimerCountdown from "react-native-timer-countdown";

import Template from "../components/templates/general";
import Counter from "../components/Counter";
import ListItems from "../components/ListItems";
import { MAIN_COLOR } from "../config/constants";

type Props = {};
class MainPage extends Component<Props> {
  render() {
    return (
      <Template>
        <Counter />
        <ListItems />
      </Template>
    );
  }
}

export default MainPage;
