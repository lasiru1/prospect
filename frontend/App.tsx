import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Home from "./app/screens/Home";
import { AppRegistry } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  TouchableHighlight,
  ImageBackground,
} from "react-native";
import React from "react";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { useFonts, Inter_600SemiBold } from "@expo-google-fonts/inter";

export default function Account() {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const image = { uri: "https://reactjs.org/logo-og.png" };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#578c31",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
            marginTop: -3,
            paddingBottom: 2,
          }}
        >
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Ionicons name="ios-arrow-back-outline" size={35} color="black" />
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text
              style={{
                fontFamily: "Inter_600SemiBold",
                fontWeight: "bold",
                fontSize: 26,
              }}
            >
              ACCOUNT
            </Text>
          </View>
          <View style={{ flex: 1, marginRight: 5 }}>
            <TouchableHighlight onPress={() => {}}>
              <View style={styles.view}>
                <FontAwesome5.Button
                  name="house-user"
                  backgroundColor="none"
                  size={32}
                  color="black"
                />
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <View>
        <ImageBackground
          source={require("./app/assets/Background.png")}
          resizeMode="stretch"
          style={styles.image}
        >
          <View
            style={{
              alignItems: "center",
              position: "relative",
              marginTop: 20,
            }}
          >
            <View style={{ flex: 1 }}>
              <Text>Boning</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text>PFP</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text>140 points</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#578c31",
    width: "100%",
    justifyContent: "center",
  },
  container2: {
    backgroundColor: "#578c31",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 60,
  },
  text: {
    color: "#ffffff",
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 30,
  },
  view: {
    alignItems: "flex-end",
  },
  image: {
    width: "100%",
    marginRight: 0,
    height: "100%",
  },
});
