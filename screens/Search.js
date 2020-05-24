import React, { state, useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableHighlight,
  Image,
  Text,
  TextInput,
  ActivityIndicator,
  FlatList,
} from "react-native";

import PostCard from "../components/VerticalListPostCard";
import images from "../assets/images/images";

export default function Category(props) {
  let params = props.route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState(params.query ? params.query : "");

  useEffect(() => {
    searchResult();
  }, []);
  const searchResult = () => {
    console.log("search result function");
    fetch(
      "https://www.tradingfuel.com/wp-json/wp/v2/search?per_page=10&type=post&search=" +
        query
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
        <View style={styles.header}>
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
                console.log("search screen searching...");
                console.log(query);
                setQuery(query);
                searchResult();
              }}
            >
              <Image source={images.searchIcon} style={styles.searchIcon} />
            </TouchableHighlight>
          </View>
        </View>
        <Text style={styles.h4}>Resutls:</Text>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            horizontal={false}
            data={data}
            keyExtractor={({ id }, index) => id.toString()}
            renderItem={({ item }) => (
              <PostCard
                title={item.title}
                id={item.id}
                navigation={props.navigation}
              />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 25,
    paddingRight: 25,
  },
  header: {
    width: "100%",
    height: 50,
    marginBottom: 20,
    backgroundColor: "#fff",
    position: "relative",
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
    elevation: 15,
  },
  searchIcon: {
    width: 25,
    height: 25,
  },
  h1: {
    fontSize: 26,
    fontWeight: "700",
    lineHeight: 32,
    marginBottom: 30,
  },
  h4: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 16,
    marginBottom: 10,
  },
});
