import { Platform } from "react-native";

import { createAppContainer, createStackNavigator } from "react-navigation";

import JokeList from "../components/JokeList";
import Joke1 from "../screens/Joke1";
import Joke2 from "../screens/Joke2";
import Joke3 from "../screens/Joke3";
import Joke4 from "../screens/Joke4";
import Joke5 from "../screens/Joke5";
import Joke6 from "../screens/Joke6";
import Joke7 from "../screens/Joke7";
import Joke8 from "../screens/Joke8";

const AppNavigator = createStackNavigator(
  {
    JokeList: { screen: JokeList },
    Joke1: { screen: Joke1 },
    Joke2: { screen: Joke2 },
    Joke3: { screen: Joke3 },
    Joke4: { screen: Joke4 },
    Joke5: { screen: Joke5 },
    Joke6: { screen: Joke6 },
    Joke7: { screen: Joke7 },
    Joke8: { screen: Joke8 }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? "green" : ""
      },
      headerTintColor: Platform.OS === "android" ? "white" : "blue"
    }
  }
);

export default createAppContainer(AppNavigator);
