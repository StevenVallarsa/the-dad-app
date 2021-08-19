import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        { name: "Steve", age: 53 },
        { name: "Julie", age: 50 },
        { name: "Jessica", age: 35 },
        { name: "Jamie", age: 32 },
        { name: "Jane", age: 22 },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Welcome Home </Text>
        {/* <ScrollView>
          {this.state.people.map((person, index) => {
            return (
              <View key={index}>
                <Text style={styles.list}>{person.name}</Text>
              </View>
            );
          })}
        </ScrollView> */}
        <FlatList
          keyExtractor={(x) => x.age}
          data={this.state.people}
          renderItem={({ item }) => {
            return <Text style={styles.list}>{item.name}</Text>;
          }}
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
  list: {
    padding: 30,
    marginTop: 20,
    backgroundColor: "pink",
    width: 200,
    fontSize: 33,
  },
});
