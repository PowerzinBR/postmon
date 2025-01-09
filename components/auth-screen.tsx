import { useState } from "react";
import { View } from "react-native";

import { LoginScreen } from "./login-screen";
import { RegisterScreen } from "./register-screen";

export const AuthScreen = () => {
  const [flow, setFlow] = useState<"login" | "register">("login");

  return (
    <View>
      {flow === "login" ? (
        <LoginScreen setFlow={setFlow} />
      ) : (
        <RegisterScreen setFlow={setFlow} />
      )}
    </View>
  );
};
