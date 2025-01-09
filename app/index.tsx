import { SafeAreaView, StyleSheet, View } from "react-native";

import { AuthScreen } from "@/components/auth-screen";

export default function MainPage() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        <AuthScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#14181c",
  },
  mainContainer: {
    margin: 24,
  },
});
