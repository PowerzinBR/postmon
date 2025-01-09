import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

export const AuthScreen = () => {
  const [fontsLoaded] = useFonts({
    NunitoBold: require("../assets/fonts/Nunito-Regular.ttf"),
    Nunito: require("../assets/fonts/Nunito.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.mainCard}>
      <View style={styles.mainCardHeader}>
        <Text style={styles.logo}>Postmon</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCardHeader: {
    position: "absolute",
    top: 30,
    left: 40,
    width: "100%",
    paddingVertical: 10,
  },
  mainCard: {
    backgroundColor: "#2d333a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  logo: {
    fontFamily: "NunitoBold",
    fontSize: 35,
    color: "#FFFFFF",
    textAlign: "left",
  },
});
