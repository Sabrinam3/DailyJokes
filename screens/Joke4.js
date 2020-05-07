import React from "react";
import { TouchableOpacity, Text, View, Alert } from "react-native";

import { styles } from "../styles/styles";
const revealPunchline = punchLine => {
  Alert.alert("Joke Punchline", punchLine, [cancelDialog], {
    cancelable: false
  });
};
const cancelDialog = {
  text: "Close",
  style: "cancel"
};
const Joke4 = ({
  navigation,
  navigation: {
    state: {
      params: { joke, punchLine }
    }
  }
}) => {
  return (
    <View style={styles.form}>
      <View style={styles.headerView}>
        <Text style={styles.jokeLabel}>Joke 4</Text>
      </View>
      <View style={styles.jokeListView}>
        <Text style={[styles.jokeText, { paddingVertical: 80 }]}>{joke}</Text>
        <TouchableOpacity onPress={() => revealPunchline(punchLine)}>
          <Text
            style={[styles.jokeButton, { marginTop: 30, marginHorizontal: 40 }]}
          >
            Reveal Punchline
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              marginTop: 15
            }}
          >
            Go Back
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Joke4.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam("screenTitle")
  };
};

export default Joke4;
