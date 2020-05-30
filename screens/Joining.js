import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";

export default function Joining(props) {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [mobile, setMobile] = useState("");
  const [mobileError, setMobileError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [data, setData] = useState([]);

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.h1}>Join our Free Class</Text>
          <Text style={styles.p} numberOfLines={7}>
            If you looking for a place where you can learn how to be a good
            trader or you're a someone who wants to enter in stock market
            trading. We're here to teach you stock market trading basics to
            advanced concepts. We're providing a free class on trading. So hurry
            up and register your seat.
          </Text>
          <View>
            <View style={styles.row}>
              <Text style={styles.label}>Full Name:</Text>
              {nameError ? (
                <Text style={styles.error}>Invalid Name</Text>
              ) : null}
            </View>
            <TextInput
              style={styles.input}
              onChange={(event) => {
                let name = event.nativeEvent.text;
                if (isValidName(name)) {
                  setName(name);
                  setNameError(false);
                } else {
                  setNameError(true);
                }
              }}
              placeholder="Enter Your Name"
            />
            <View style={styles.row}>
              <Text style={styles.label}>Email Address:</Text>
              {emailError ? (
                <Text style={styles.error}>Invalid Email</Text>
              ) : null}
            </View>
            <TextInput
              style={styles.input}
              onChange={(event) => {
                let email = event.nativeEvent.text;
                if (isValidEmail(email)) {
                  setEmail(email);
                  setEmailError(false);
                } else {
                  setEmailError(true);
                }
              }}
              placeholder="Enter Your Email"
              keyboardType="email-address"
            />
            <View style={styles.row}>
              <Text style={styles.label}>Mobile Number:</Text>
              {mobileError ? (
                <Text style={styles.error}>Invalid Mobile</Text>
              ) : null}
            </View>

            <TextInput
              style={styles.input}
              onChange={(event) => {
                let mobile = event.nativeEvent.text;
                if (isValidMobile(mobile)) {
                  setMobile(mobile);
                  setMobileError(false);
                } else {
                  setMobileError(true);
                }
              }}
              placeholder="Enter Your Mobile Number"
              keyboardType="phone-pad"
            />
            <TouchableHighlight
              underlayColor="#ff0d7e"
              style={styles.btn}
              onPress={() => {
                console.log("register clicked");
                registerSeat(
                  name,
                  email,
                  mobile,
                  setLoading,
                  setData,
                  setResponse
                );
                setLoading(true);
              }}
            >
              {isLoading ? (
                <ActivityIndicator
                  style={styles.loadingIndicator}
                  color="#fff"
                />
              ) : (
                <Text style={styles.btnText}>Submit</Text>
              )}
            </TouchableHighlight>
            {response != null ? (
              <Text style={styles.successMsg}>{response}</Text>
            ) : null}
          </View>
        </View>
      </ScrollView>
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
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  h1: {
    fontSize: 26,
    fontWeight: "700",
    lineHeight: 32,
    marginBottom: 15,
  },
  p: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 21,
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 18,
    marginBottom: 10,
  },
  error: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 14,
    marginBottom: 10,
    color: "red",
    marginLeft: 10,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderStyle: "solid",
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },
  btn: {
    width: "100%",
    height: 50,
    backgroundColor: "#5674ef",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 18,
    color: "#fff",
  },
  loadingIndicator: {
    color: "white",
  },
  successMsg: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 16,
    marginBottom: 10,
    color: "#ff0d7e",
  },
});

function isValidName(name) {
  var re = /^[a-zA-Z\s]+$/;
  if (re.test(name)) {
    console.log("valid name");
    return true;
  } else {
    console.log("invalid name");
    return false;
  }
}

function isValidEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email)) {
    console.log("valid email");
    return true;
  } else {
    console.log("invalid email");
    return false;
  }
}
function isValidMobile(mobile) {
  var re = /^\d{10}$/;
  if (re.test(mobile)) {
    console.log("valid mobile");
    return true;
  } else {
    console.log("invalid mobile");
    return false;
  }
}

function registerSeat(name, email, mobile, setLoading, setData, setResponse) {
  let formData = new FormData();
  formData.append("your-name", name);
  formData.append("your-mobile", mobile);
  formData.append("your-email", email);

  setResponse("");

  fetch(
    "http://www.tradingfuel.com/wp-json/contact-form-7/v1/contact-forms/8864/feedback",
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    }
  )
    .then((response) => response.json())
    .then((json) => {
      console.log("result recieved" + json["message"]);
      setResponse(json["message"]);
      setData(json);
    })
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
}
