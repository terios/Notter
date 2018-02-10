import { Platform } from "react-native";

import Main from "./screens/Main";

const AppNavigatorConfig = {
  routes: {
    Main: {
      screen: Main
    }
  },
  options: {
    initialRouteName: "Main"
  }
};

export default AppNavigatorConfig;
