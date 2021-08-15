import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Express extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Express Yourself </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 20,
    color: "red",
  },
});
