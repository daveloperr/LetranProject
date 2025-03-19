import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fce4ec", 
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50, 
  },
  registerContainer: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fce4ec",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  pigImage: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
    color: "#d81b60",
  },
  subTitle: {
    fontSize: 16,
    color: "#818589",
    textAlign: "center",
    marginBottom: 20,
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
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInput: {
    flex: 1,
    marginRight: 6,
  },
  button: {
    backgroundColor: "#d81b60",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  resultText: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
    color: "#d81b60",
  },
});
