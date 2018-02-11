import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "transparent",
    height: Platform.OS === "ios" ? 20 : 0
  },
  gradient: {
    height: "100%"
  }
});

type Props = {
  children?: React.Node,
  style?: StyleSheet.Styles
};

class Default extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View {...this.props}>
        <View style={styles.statusBar} />
        {this.props.children}
      </View>
    );
  }
}

export default Default;
