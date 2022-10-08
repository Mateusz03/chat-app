import { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  View,
  useColorScheme,
  StyleSheet,
  SafeAreaView,
  Appearance,
  TouchableOpacity,
} from "react-native";
import ArrowBack from "../../assets/arrowBack";
import { useNavigate } from "react-router-native";
import SignButton from "../../assets/signButton";

const Login = () => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(Appearance.getColorScheme);
  const navigate = useNavigate();
  useEffect(() => {
    setTheme(colorScheme);
  }, [colorScheme]);

  const arrowBack = () => {
    navigate("/");
  };
  return (
    <View style={globalTheme.login}>
      <ArrowBack
        style={globalTheme.arrowBack}
        style2={globalTheme.arrowContainer}
        fill={theme}
        onPress={() => {
          arrowBack();
        }}
      />
      <Text style={globalTheme.title}>Welcome{"\n"}Back</Text>
      <SafeAreaView style={globalTheme.inputContainer}>
        <TextInput
          placeholder="Username"
          style={theme === "light" ? lightTheme.input : darkTheme.input}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={theme === "light" ? lightTheme.input : darkTheme.input}
        />
      </SafeAreaView>
      <View style={globalTheme.signContainer}>
        <Text style={globalTheme.signin}>Sign in</Text>
        <SignButton
          style={globalTheme.signButton}
          signButtonContainer={globalTheme.signButtonContainer}
        />
      </View>
      <TouchableOpacity style={globalTheme.signup}>
        <Text style={globalTheme.signup}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};
const globalTheme = StyleSheet.create({
  login: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  arrowContainer: {
    width: 48,
    height: 48,
    position: "absolute",
    top: "10%",
    left: "5%",
  },

  arrowBack: {
    zIndex: 1,
    width: 48,
    height: 48,
  },
  title: {
    fontSize: 48,
    position: "absolute",
    top: "22.5%",
    left: "5%",
  },
  inputContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
  },
  signContainer: {
    width: "70%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: "75%",
  },
  signin: {
    fontSize: 22,
    fontWeight: "bold",
  },
  signButtonContainer: {
    backgroundColor: "#E72963",
    width: 64,
    height: 64,
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  signButton: {
    width: 32,
    height: 32,
  },
  signup: {
    fontSize: 12,
    opacity: 0.8,
    textDecorationLine: "underline",
    position: "absolute",
    top: "90%",
    left: "15%",
  },
});
const darkTheme = StyleSheet.create({
  input: {
    zIndex: 2,
    width: "70%",
    borderColor: "#ababab",
    borderBottomWidth: 2,
    color: "#ffffff",
    padding: 10,
    fontSize: 18,
    margin: 16,
  },
});
const lightTheme = StyleSheet.create({
  input: {
    zIndex: 2,
    width: "65%",
    borderBottomColor: "#212121",
    borderBottomWidth: 2,
    color: "#212121",
    padding: 10,
    fontSize: 18,
    margin: 16,
  },
});
export default Login;
