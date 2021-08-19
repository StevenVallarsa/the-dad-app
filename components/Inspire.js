import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { QUOTES } from "../shared/quotes";

export default class Inspire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: QUOTES,
      nextQuote: "",
    };
  }

  // componentDidMount() {
  //   const newQuote =
  //     this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];
  //   this.setState({ nextQuote: newQuote });
  // }

  refreshQuote() {
    const randomIndex = Math.floor(Math.random() * this.state.quotes.length);
    const newQuote = this.state.quotes[randomIndex];
    this.setState({ nextQuote: newQuote });
    console.log(this.state.nextQuote);
  }

  render() {
    const quote = this.state.nextQuote || this.state.quotes[0];
    console.log(this.state.nextQuote);

    return (
      <View style={styles.container}>
        <Text style={styles.title}> Inspiration </Text>
        <Text style={styles.quote}>{quote}</Text>
        <Button
          onPress={() => this.refreshQuote()}
          title="Refresh Quote"
          color="red"
        />
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
