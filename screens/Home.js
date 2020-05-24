import React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import HeroBanner from "../components/HeroBanner";
import CategorySection from "../components/CategorySection";
import LatestPostSection from "../components/LatestPostSection";
import NavigationMenu from "../components/NavigationMenu";

export default function Home(props) {
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
        <HeroBanner navigation={props.navigation} />
        <CategorySection navigation={props.navigation} />
        <LatestPostSection navigation={props.navigation} />
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
});
