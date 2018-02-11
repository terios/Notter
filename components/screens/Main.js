import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

class MainPage extends Component {
  onChooseColor() {}

  render() {
    const styles = { flex: 1, alignSelf: "stretch" };
    return (
      <View style={styles}>
        <Text>anas</Text>

        <Button text="BUTTON" />
      </View>
    );
  }
}

export default MainPage;
