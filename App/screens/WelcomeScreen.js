import React from "react";
import { ImageBackground, View, StyleSheet, Image, Text } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-red.png")}
        ></Image>
        <Text>Sell things you don't want</Text>
      </View>
      <View style={styles.login}></View>
      <View style={styles.register}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  login: {
    backgroundColor: "#fc5c65",
    width: "100%",
    height: 70,
  },
  register: {
    backgroundColor: "#4ecde4",
    width: "100%",
    height: 70,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});

export default WelcomeScreen;
