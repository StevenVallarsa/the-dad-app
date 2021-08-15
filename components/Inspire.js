import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { QUOTES } from "../shared/quotes";

export default class Inspire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: QUOTES.quotes,
      index: QUOTES.index,
    };
  }

  quoteMe() {
    return this.state.quotes[
      Math.floor(Math.random() * this.state.quotes.length)
    ];
  }

  newQuote() {}

  render() {
    const quote = this.quoteMe();

    return (
      <View style={styles.container}>
        <Text style={styles.title}> Inspiration </Text>
        <Text style={styles.quote}>{quote}</Text>
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
  quote: {
    fontSize: 20,
    fontFamily: "serif",
    fontStyle: "italic",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 40,
    paddingRight: 40,
    paddingLeft: 40,
  },
});
