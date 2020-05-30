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
          props.navigation.navigate("Post", {
            title: props.title,
            id: props.id,
            name: props.title,
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

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 130,
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: "#5674ef",
    position: "relative",
  },
  title: {
    fontFamily: "roboto",
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
    fontFamily: "roboto",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 14,
    color: "#222",
  },
});
