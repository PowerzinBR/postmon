import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function MainPage() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "red",
  },
  mainContainer: {
    margin: 24,
  },
});
