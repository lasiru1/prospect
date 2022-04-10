import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import Welcome from "./Welcome";
import AccntIcon from "../assets/account_icon.svg";
import MapView from "react-native-maps";

function Home() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <Welcome />;
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topView}>
        <Text style={styles.text}>PROSPECT</Text>
        <AccntIcon style={styles.accntIcon} />
      </View>
      <MapView style={styles.map} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {},
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  topView: {
    paddingTop: 30,
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#85BB5C",
    flexDirection: "row",
  },
  text: {
    paddingTop: 17,
    paddingBottom: 26,
    fontFamily: "Inter_900Black",
    fontSize: 23,
    justifyContent: "center",
    textAlign: "center",
    marginTop: 10,
    marginLeft: 60,
    flex: 1,
  },
  accntIcon: {
    position: "relative",
    alignSelf: "center",
    marginTop: 15,
    marginRight: 10,
    justifyContent: "flex-end",
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
    elevation: -1,
  },
});

export default Home;
