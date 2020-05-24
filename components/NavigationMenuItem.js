import React, { useState } from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";

export default function NavigationMenuItem(props) {
  const [menuTouched, setMenuTouched] = useState(false);
  return (
    <TouchableHighlight
      style={styles.menuItem}
      underlayColor="transparent"
      onPress={() => {
        props.navigation.navigate("Category", {
          title: props.title,
          id: props.id,
        });
        props.setModalVisible(false);
      }}
      onShowUnderlay={() => setMenuTouched(true)}
      onHideUnderlay={() => setMenuTouched(false)}
    >
      <Text
        style={[styles.menuTitle, { color: menuTouched ? "#ff0d7e" : "#222" }]}
      >
        {props.title}
      </Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    marginBottom: 20,
  },
  menuTitle: {
    fontSize: 21,
    fontWeight: "700",
    lineHeight: 21,
    color: "#ff1",
  },
});
