import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useFonts } from "expo-font";

import { Input } from "./input";

type RegisterScreenProps = {
  setFlow: (flow: "login" | "register") => void;
};

export const RegisterScreen = ({ setFlow }: RegisterScreenProps) => {
  const [fontsLoaded] = useFonts({
    NunitoBold: require("../assets/fonts/Nunito-Regular.ttf"),
    Nunito: require("../assets/fonts/Nunito.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.mainCard}>
      <View style={styles.mainCardHeader}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Email ou nome" />
        <Input placeholder="Senha" secureTextEntry />
        <Input placeholder="Confirmar senha" secureTextEntry />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.createAccountButton}>
          <Text style={styles.createAccountButtonText}>Criar conta</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFlow("login")}
          style={styles.registerButton}
        >
          <Text style={styles.registerButtonText}>Já tenho uma conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCardHeader: {
    top: 30,
    width: "100%",
    paddingVertical: 10,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 50,
  },
  mainCard: {
    backgroundColor: "#1e1e2e",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4.65,
    elevation: 8,
    paddingHorizontal: 0,
    paddingVertical: 20,
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20,
  },
  buttonContainer: {
    width: "80%",
    alignItems: "center",
    marginBottom: 20,
  },
  createAccountButton: {
    backgroundColor: "#4a90e2",
    borderRadius: 8,
    width: "100%",
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 6,
    marginBottom: 10,
  },
  createAccountButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerButton: {
    marginBottom: 0,
  },
  registerButtonText: {
    color: "#4a90e2",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});
