import React from "react";
import { Image, View, StyleSheet, Platform } from "react-native";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.leftbutton}></View>
      <View style={styles.rightbutton}></View>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  leftbutton: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 70,
    left: 20,
  },
  rightbutton: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 70,
    right: 20,
  },
});

export default ViewImageScreen;
