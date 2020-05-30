import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import PostCard from "./HorizontalListPostCard";

export default function LatestPostSection(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.tradingfuel.com/wp-json/wp/v2/posts?order=desc&orderby=date&per_page=5"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Latest Post</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          horizontal={true}
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
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },
  sectionTitle: {
    fontFamily: "oswald",
    fontSize: 21,
    fontWeight: "500",
    lineHeight: 24,
    marginBottom: 10,
  },
});
