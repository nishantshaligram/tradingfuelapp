import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import CategoryCard from "./CategoryCard";

export default function CategorySection(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://www.tradingfuel.com/wp-json/wp/v2/categories")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Categories</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          horizontal={true}
          data={data}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={({ item }) => (
            <CategoryCard
              title={item.name}
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
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 18,
    marginBottom: 10,
  },
});
