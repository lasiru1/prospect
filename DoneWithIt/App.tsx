import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function App() {
  console.log("App executed");
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={console.log("Test")}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit commodi nisi incidunt? Explicabo deleniti harum provident ipsam natus, totam quod officiis expedita quas asperiores eius voluptas quo. Expedita, earum quis.
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    height: "100%",
    width: "100%",
    flex: 1,
  },
});
