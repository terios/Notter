import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

import Template from "../templates/general";

class MainPage extends Component {
  onChooseColor() {}

  render() {
    const styles = { flex: 1, alignSelf: "stretch" };
    return (
      <Template>
        <Text>anas pppppp</Text>
        <Button text="BUTTON" />
      </Template>
    );
  }
}

export default MainPage;
