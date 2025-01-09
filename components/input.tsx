import { TextInput, TextInputProps, StyleSheet } from "react-native";

type InputProps = TextInputProps;

export const Input = ({ style, ...props }: InputProps) => {
  return (
    <TextInput
      placeholderTextColor="#FFFFFFa0"
      {...props}
      style={[styles.input, style]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderRadius: 8,
    height: 55,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: "white",
    backgroundColor: "#2b2b3d",
    borderWidth: 1,
    borderColor: "#44475a",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
  },
});
