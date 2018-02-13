import { Platform } from "react-native";

import { MAIN_COLOR, SECONDARY_COLOR, WHITE } from "./config/constants";
import Main from "./screens/Main";

const AppNavigatorConfig = {
  routes: {
    Main: {
      screen: Main
    },
    Personal: {
      screen: Main
    }
  },
  options: {
    initialRouteName: "Main",
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: WHITE,
      inactiveTintColor: SECONDARY_COLOR,
      labelStyle: {
        fontSize: 15,
        fontWeight: "bold"
      },
      style: {
        backgroundColor: MAIN_COLOR
      }
    }
  }
};

export default AppNavigatorConfig;
