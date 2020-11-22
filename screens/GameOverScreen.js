import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Color from "../components/colors";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.textScreen}>Game Over!</Text>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>Number was:{props.userNumber}</Text>
      <Button title="New Game" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textScreen: {
    fontSize: 30,
    color: Color.primary,
  },
});

export default GameOver;
