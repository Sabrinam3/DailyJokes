import React, { useState } from "react";
import * as SMS from "expo-sms";
import * as MailComposer from "expo-mail-composer";

import {
  View,
  Text,
  Platform,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";
import { styles } from "../styles/styles";
import { ScrollView } from "react-native-gesture-handler";

const JokeList = (props) => {
  const sendJokesSMS = async () => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      const { result } = await SMS.sendSMSAsync([], combineJokesIntoString());
      alert(
        result.status === "sent" ? "Message sent!" : "Message unable to send."
      );
    } else {
      alert("SMS is not available on this device");
    }
  };

  const sendJokesEmail = () => {
    var options = {
      recipients: ["s_tessier2@fanshaweonline.ca"],
      subject: "Daily Jokes!",
      body: combineJokesIntoString(),
    };

    MailComposer.composeAsync(options).then((result) => {
      alert(
        result.status === "sent" ? "Message sent!" : "Message unable to send."
      );
    });
  };

  const combineJokesIntoString = () => {
    let jokeString = "";
    jokes.map((joke) => {
      jokeString += `Joke: ${joke.joke} Punchline: ${joke.punchLine}\n`;
    });
    return jokeString;
  };
  const jokes = [
    {
      id: 1,
      joke: "Why don't scientists trust atoms?",
      punchLine: "Because they make up everything!",
    },
    {
      id: 2,
      joke: "How do you drown a hipster?",
      punchLine: "Throw him in the mainstream!",
    },
    {
      id: 3,
      joke: "What did the Buddhist say to the hotdog vendor?",
      punchLine: "Make me one with everything!",
    },
    {
      id: 4,
      joke: "What do you call an apology written in dots and dashes?",
      punchLine: "Re-morse code!",
    },
    {
      id: 5,
      joke: "What do you call a fake noodle?",
      punchLine: "An impasta!",
    },
    {
      id: 6,
      joke: "Why did the scarecrow win an award?",
      punchLine: "Because he was outstanding in his field.",
    },
    {
      id: 7,
      joke: "What did the DNA say to the other DNA?",
      punchLine: "Do these genes make me look fat?",
    },
    {
      id: 8,
      joke: "What did the left eye say to the right eye?",
      punchLine: "Between you and me, something smells.",
    },
  ];
  return (
    <View style={styles.form}>
      <View style={styles.headerView}>
        <Text style={styles.jokeLabel}>Daily Jokes</Text>
      </View>
      <View style={styles.jokeListView}>
        <ScrollView>
          {jokes.map((joke) => (
            <TouchableOpacity
              key={joke.id}
              onPress={() =>
                props.navigation.navigate(`Joke${joke.id}`, {
                  joke: joke.joke,
                  punchLine: joke.punchLine,
                })
              }
            >
              <Text style={styles.jokeText}>Joke {joke.id}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity onPress={() => sendJokesSMS()}>
          <Text style={styles.jokeButton}>Send Jokes via SMS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => sendJokesEmail()}>
          <Text style={styles.jokeButton}>Send Jokes via Email</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

JokeList.navigationOptions = (navData) => {
  return {
    headerTitle: "Jokes",
  };
};

export default JokeList;
