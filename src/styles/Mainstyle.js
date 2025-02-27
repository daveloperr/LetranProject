import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 14,
    color: "#71797E",
    marginBottom: 20,
    textAlign: "center",

  },

  TextInput: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#E3F2FD",
    borderRadius: 8,
  },
  resultText: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
    color: "#007BFF",
  },
});
