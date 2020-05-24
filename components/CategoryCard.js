import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

export default function CategoryCard(props) {
  const bgColors = ["#f845ab", "#ff454d"];

  return (
    <TouchableHighlight
      style={styles.card}
      underlayColor="#ff0d7e"
      onPress={() => {
        console.log("category pressed");
        props.navigation.navigate("Category", {
          title: props.title,
          id: props.id,
        });
      }}
    >
      <Text style={styles.title}>{props.title}</Text>
    </TouchableHighlight>
  );
}

let styles = StyleSheet.create({
  card: {
    padding: 15,
    marginRight: 8,
    borderRadius: 5,
    elevation: 2,
    backgroundColor: "#5674ef",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 16,
    color: "#fff",
  },
});
