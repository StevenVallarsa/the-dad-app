import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import Home from "./components/Home";
import Inspire from "./components/Inspire";
import Express from "./components/Express";
import Icon from "react-native-vector-icons/FontAwesome5";

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
    },
    Inspire: {
      screen: Inspire,
    },
    Express: {
      screen: Express,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = "canadian-maple-leaf";
        } else if (routeName === "Express") {
          iconName = "rebel";
        } else if (routeName === "Inspire") {
          iconName = "react";
        }
        return (
          <Icon name={iconName} size={horizontal ? 30 : 28} color={tintColor} />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "#f96",
      style: {
        backgroundColor: "red",
      },
    },
  }
);

export default createAppContainer(TabNavigator);
