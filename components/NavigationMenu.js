import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  Modal,
  ScrollView,
  Text,
} from "react-native";

import images from "../assets/images/images";
import NavigationMenuItem from "./NavigationMenuItem";

export default function NavigationMenu(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [hamburgerTouched, setHamburgerTouched] = useState(false);
  const [btnTouched, setBtnTouched] = useState(false);
  const menu = [
    { title: "Stock Market", id: 106 },
    { title: "Intraday", id: 105 },
    { title: "Technical Analysis", id: 139 },
    { title: "Demat", id: 103 },
    { title: "Mutual Fund", id: 107 },
    { title: "IPO", id: 108 },
    { title: "Amibroker", id: 115 },
  ];
  return (
    <View>
      <View style={styles.menuBtnContainer}>
        <TouchableHighlight
          underlayColor="#ff0d7e"
          style={styles.menuOpenBtn}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Image source={images.menuIcon} style={styles.menuIcon} />
        </TouchableHighlight>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={styles.navigationModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <ScrollView style={styles.navigationMenu}>
              {menu.map((item) => {
                return (
                  <NavigationMenuItem
                    setModalVisible={setModalVisible}
                    navigation={props.navigation}
                    title={item.title}
                    id={item.id}
                    key={item.id}
                  />
                );
              })}
              <TouchableHighlight
                style={styles.btn}
                underlayColor="#ff0d7e"
                onPress={() => {
                  props.navigation.navigate("Joining", {});
                  setModalVisible(!modalVisible);
                }}
                onShowUnderlay={() => setBtnTouched(true)}
                onHideUnderlay={() => setBtnTouched(false)}
              >
                <Text style={styles.btnText}>Free Class</Text>
              </TouchableHighlight>
            </ScrollView>
          </View>
        </View>
        <View style={styles.menuBtnContainer}>
          <TouchableHighlight
            underlayColor="#ff0d7e"
            style={styles.menuOpenBtn}
            onPress={() => setModalVisible(!modalVisible)}
            onShowUnderlay={() => setHamburgerTouched(true)}
            onHideUnderlay={() => setHamburgerTouched(false)}
          >
            <Image source={images.closeIcon} style={styles.menuIcon} />
          </TouchableHighlight>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  menuBtnContainer: {
    position: "absolute",
    bottom: 20,
    right: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  menuOpenBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    padding: 5,
    backgroundColor: "#5674ef",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 20,
  },
  menuIcon: {},
  navigationModal: {
    elevation: 30,
  },
  modalContainer: {
    width: "100%",
    height: "100%",
    paddingTop: 40,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  menuItem: {
    marginBottom: 20,
  },
  menuTitle: {
    fontFamily: "roboto",
    fontSize: 21,
    fontWeight: "700",
    lineHeight: 21,
    color: "#ff1",
  },
  btn: {
    width: 120,
    height: 45,
    backgroundColor: "#5674ef",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontFamily: "roboto",
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 18,
    color: "#fff",
  },
});
