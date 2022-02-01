import { StyleSheet, View } from "react-native";
import Carslist from "./components/Carslist/index.js";
import Header from "./components/Header/index.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Carslist />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
