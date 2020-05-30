import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

export default function CategoryCard(props) {
  const bgColors = ["#f845ab", "#ff454d"];

  return (
    <TouchableHighlight
      style={styles.card}
      underlayColor="#ff0d7e"
      onPress={() => {
        props.navigation.navigate("Category", {
          title: props.title,
          id: props.id,
          name: props.title,
        });
      }}
    >
      <Text style={styles.title}>{props.title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginRight: 8,
    borderRadius: 5,
    elevation: 2,
    backgroundColor: "#5674ef",
  },
  title: {
    fontFamily: "roboto",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 16,
    color: "#fff",
  },
});
