import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  TextInput,
} from "react-native";
import images from "../assets/images/images";

export default function HeroBanner(props) {
  const [query, setQuery] = useState();
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image source={images.logo} style={styles.logo} />
      </View>
      <View style={styles.searchBar}>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder={"Search your favorite topic"}
            style={styles.searchInput}
            onChange={(event) => {
              setQuery(event.nativeEvent.text);
            }}
            value={query}
            autoCorrect={true}
          />
          <TouchableHighlight
            style={styles.searchBtn}
            underlayColor="#ff0d7e"
            onPress={() => {
              props.navigation.navigate("Search", {
                query: query,
              });
            }}
          >
            <Image source={images.searchIcon} style={styles.searchIcon} />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 200,
    marginBottom: 50,
    backgroundColor: "#5674ef",
    position: "relative",
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 60,
    height: 60,
    marginTop: 70,
  },
  searchBar: {
    position: "absolute",
    bottom: -25,
    left: 0,
    right: 0,
    paddingLeft: 25,
    paddingRight: 25,
  },
  searchContainer: {
    position: "relative",
  },
  searchInput: {
    width: "100%",
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  searchBtn: {
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 150,
    width: 40,
    height: 40,
    padding: 8,
    borderRadius: 20,
    // backgroundColor: "#4B6695",
    backgroundColor: "#5674ef",
    elevation: 11,
  },
  searchIcon: {
    width: 25,
    height: 25,
  },
});
