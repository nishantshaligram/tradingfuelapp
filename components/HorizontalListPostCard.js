import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

export default function PostCard(props) {
  const bgColors = ["#f845ab", "#ff454a"];
  const [touched, setTouched] = useState(false);
  return (
    <View
      onPress={() => {
        console.log("Category Pressed");
      }}
      style={styles.card}
    >
      <Text style={styles.title} numberOfLines={2}>
        {props.title}
      </Text>
      <TouchableHighlight
        style={styles.btnMore}
        underlayColor="#ff0d7e"
        onPress={() => {
          console.log("post pressed");
          props.navigation.navigate("Post", {
            title: props.title,
            id: props.id,
          });
        }}
        onShowUnderlay={() => setTouched(true)}
        onHideUnderlay={() => setTouched(false)}
      >
        <Text
          style={(styles.btnMoreText, { color: touched ? "#fff" : "#000" })}
        >
          Read More
        </Text>
      </TouchableHighlight>
    </View>
  );
}

let styles = StyleSheet.create({
  card: {
    width: 240,
    height: 130,
    padding: 20,
    marginRight: 8,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: "#5674ef",
    position: "relative",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 21,
    color: "#fff",
    marginBottom: 15,
  },
  btnMore: {
    width: 100,
    height: 35,
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 15,
    left: 15,
  },
  btnMoreText: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 14,
    color: "#222",
  },
});
