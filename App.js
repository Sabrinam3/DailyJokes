import React, { useState } from "react";

import AppNavigator from "./navigation/AppNavigator";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFonts = () => {
  return Font.loadAsync({
    "ConcertOne-Regular": require("./assets/fonts/ConcertOne-Regular.ttf"),
    "AmaticSC-Bold": require("./assets/fonts/AmaticSC-Bold.ttf")
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  return <AppNavigator />;
}
