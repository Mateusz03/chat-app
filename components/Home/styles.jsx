import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 42,
    marginBottom: 80,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 144,
    height: 52,
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 30,
  },
  text: {
    fontSize: 20,
    color: "#ffffff",
  },
  login: {
    color: "#EB2562",
  },
  register: {
    backgroundColor: "#EB2562",
  },
});
export default styles;
