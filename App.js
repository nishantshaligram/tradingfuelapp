import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import Post from "./screens/Post";
import Category from "./screens/Category";
import Search from "./screens/Search";
import Joining from "./screens/Joining";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ title: "Welcome" }, { headerShown: false })}
        />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="Category" component={Category} />
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
