import React, { state, useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  FlatList,
} from "react-native";

import PostCard from "../components/VerticalListPostCard";
import NavigationMenu from "../components/NavigationMenu";

export default function Category(props) {
  let params = props.route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  let catID = params.id;

  useEffect(() => {
    // props.navigation.setParams({ name: params.title });
    fetch("https://www.tradingfuel.com/wp-json/wp/v2/posts?categories=" + catID)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator style={styles.activityIndicator} />
        ) : (
          <FlatList
            horizontal={false}
            data={data}
            keyExtractor={({ id }, index) => id.toString()}
            renderItem={({ item }) => (
              <PostCard
                title={item.title.rendered}
                id={item.id}
                navigation={props.navigation}
              />
            )}
          />
        )}
      </View>
      <NavigationMenu navigation={props.navigation} />
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
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 25,
    paddingRight: 25,
  },
  h1: {
    fontFamily: "oswald",
    fontSize: 26,
    fontWeight: "700",
    lineHeight: 32,
    marginBottom: 30,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
