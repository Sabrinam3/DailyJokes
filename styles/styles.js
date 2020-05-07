import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  form: {
    flex: 1,
    flexDirection: "column",
    marginVertical: 10,
    marginHorizontal: 30,
  },
  headerView: {
    flex: 0.8,
    alignContent: "center",
  },
  jokeListView: {
    flex: 3.5,
    alignContent: "center",
  },
  buttonView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignContent: "center",
    marginBottom: 30,
    marginHorizontal: 20,
  },
  jokeLabel: {
    fontFamily: "ConcertOne-Regular",
    textAlign: "center",
    marginTop: 5,
    fontSize: 36,
  },
  jokeText: {
    fontFamily: "AmaticSC-Bold",
    fontSize: 30,
    padding: 15,
    borderColor: "grey",
    borderWidth: 1,
    textAlign: "center",
    marginVertical: 5,
    backgroundColor: "#dfffbf",
  },
  label: {
    fontSize: 14,
    textAlign: "center",
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
    textAlignVertical: "top",
  },
  jokeButton: {
    backgroundColor: "#ADE8A2",
    padding: 5,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    fontFamily: "ConcertOne-Regular",
    fontSize: 20,
    textAlign: "center",
  },
});
