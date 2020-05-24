import React, { state, useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import HTML from "react-native-render-html";
import NavigationMenu from "../components/NavigationMenu";

export default function PostDetails(props) {
  let params = props.route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  let postID = params.id;
  useEffect(() => {
    fetch(
      "https://www.tradingfuel.com/wp-json/wp/v2/posts/" + postID + "?_embed"
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.container}>
            <Text style={styles.h1}>{data.title["rendered"]}</Text>
            <Image
              source={{ uri: data._embedded["wp:featuredmedia"][0].source_url }}
              style={{ width: "100%", height: 200, marginBottom: 30 }}
            />
            {/* <WebView
              originWhitelist={["*"]}
              source={{
                html:
                  '<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body>' +
                  data.content["rendered"] +
                  "</body></html>",
              }}
              onLoad={() => {
                console.log("html is being loaded");
              }}
              scrollEnabled={false}
              scalesPageToFit={true}
              bounces={false}
              javaScriptEnabled={false}
              style={{ width: "100%", height: 200 }}
            /> */}
            {/* <Text>{data.content["rendered"]}</Text> */}
            <HTML
              html={data.content["rendered"]}
              imagesMaxWidth={Dimensions.get("window").width}
            />
          </View>
        )}
      </ScrollView>
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
    fontSize: 26,
    fontWeight: "700",
    lineHeight: 32,
    marginBottom: 30,
  },
});
