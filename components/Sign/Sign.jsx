import { View, Dimensions, StyleSheet } from "react-native";
import { useParams } from "react-router-native";
import LoginBg from "../../assets/loginBg";
import RegisterBg from "../../assets/registerBg";
import Login from "../Login/Login";
import Register from "../Register/Register";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Sign = () => {
  const { entry } = useParams();
  return (
    <View style={styles.sign}>
      {entry === "In" && (
        <>
          <LoginBg style={styles.bg} />
          <Login />
        </>
      )}
      {entry === "Up" && (
        <>
          <RegisterBg style={styles.bg} />
          <Register />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sign: {
    width: windowWidth,
    height: windowHeight,
    flex: 1,
  },
  bg: {
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
});

export default Sign;
