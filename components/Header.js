import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.headerComponent}>
      <Text style={styles.headertxt}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerComponent: {
    width: "100%",
    height: 90,
    paddingTop: 10,
    backgroundColor: "#6495ED",
    alignItems: "center",
    justifyContent: "center",
  },
  headertxt: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Header;
