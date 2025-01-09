import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

import { AuthScreen } from "@/components/auth-screen";

export default function MainPage() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        <AuthScreen />
      </View>
      <StatusBar hidden />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#13131c",
  },
  mainContainer: {
    margin: 30,
    marginBottom: 20,
  },
});
