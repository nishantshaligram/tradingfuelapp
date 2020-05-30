import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import { AppLoading } from "expo";
//screens
import Home from "./screens/Home";
import Post from "./screens/Post";
import Category from "./screens/Category";
import Search from "./screens/Search";
import Joining from "./screens/Joining";

const Stack = createStackNavigator();

export default function App(props) {
  // const route = props.route;
  const [fontLoaded, setFontLoaded] = useState(false);
  const fetchFonts = () => {
    return Font.loadAsync({
      merriweather: require("./assets/fonts/merriweather.ttf"),
      roboto: require("./assets/fonts/roboto.ttf"),
      oswald: require("./assets/fonts/oswald.ttf"),
    });
  };

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ title: "Trading Fuel" }, { headerShown: false })}
        />
        <Stack.Screen
          name="Post"
          component={Post}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="Category"
          component={Category}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen
          name="Joining"
          component={Joining}
          options={({ title: "Free Class" }, { headerShown: true })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
