import { Text, TouchableOpacity, useColorScheme } from "react-native";
import styled from "styled-components/native";
import Svg, { Path } from "react-native-svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-native";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const Background = () => {
  return (
    <Svg
      width="100%"
      height="450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ zIndex: -1, position: "absolute", top: 0 }}
    >
      <Path
        d="M300.711 0C298.17 5.33429 282.055 10.1148 252.033 19.0115C187.74 38.0599 170.123 28.6649 136.132 49.5221C120.202 59.6228 105.903 72.0695 93.7218 86.4376C87.2708 94.6163 81.3257 103.178 75.9195 112.075C58.9702 138.747 59.545 144.303 51.0518 153.772C47.1752 158.032 42.8197 161.834 38.071 165.105C25.461 173.909 10.088 179.575 0.0371094 175.921V0H300.711Z"
        fill="#9A3367"
      />
      <Path
        d="M430 0V88.5972C413.18 120.621 389.982 126.676 345.569 164.828C301.471 202.74 279.404 221.696 269 252.779C259.209 281.979 277.234 323.472 257.874 361.569C257.688 361.938 257.503 362.307 257.318 362.621C256.817 363.599 256.427 364.301 256.427 364.301C256.427 364.301 240.35 395.18 201.852 412.937C133.239 444.536 44.5614 398.595 0 360.258V175.902C10.0509 179.594 25.4239 173.89 38.0339 165.086C42.7826 161.816 47.1381 158.013 51.0148 153.753C59.508 144.284 58.9331 138.728 75.8823 112.057C81.2886 103.16 87.2337 94.5979 93.6847 86.4192C105.865 72.051 120.165 59.6043 136.095 49.5037C170.086 28.6464 187.703 38.0414 251.995 18.993C282.055 10.1149 298.17 5.33429 300.711 0H430Z"
        fill="#E72963"
      />
      <Path
        d="M430 88.5787V450C345.031 439.313 284.392 386.708 266.386 370.632L257.318 362.658C257.503 362.344 257.689 361.975 257.874 361.606C277.234 323.509 259.209 282.016 269 252.816C279.404 221.733 301.471 202.777 345.569 164.865C389.982 126.676 413.181 120.621 430 88.5787Z"
        fill="#F2949D"
      />
    </Svg>
  );
};

const ArrowBack = (props) => {
  const navigate = useNavigate();
  const onPress = () => {
    navigate("/");
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 48,
        height: 48,
        zIndex: 0,
        position: "relative",
        top: 80,
        left: "5%",
        zIndex: 1,
      }}
    >
      <Svg xmlns="http://www.w3.org/2000/svg" style={{ width: 48, height: 48 }}>
        <Path
          fill={props.theme === "dark" ? "#212121" : "#ffffff"}
          d="M20 44 0 24 20 4l2.8 2.85L5.65 24 22.8 41.15Z"
        />
      </Svg>
    </TouchableOpacity>
  );
};
const Title = styled.Text`
  font-size: 42px;
  position: relative;
  top: 150px;
  left: 5%;
  color: #212121;
`;
const InputContainer = styled.View`
  position: relative;
  top: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Input = styled.TextInput`
  width: 60%;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${(props) => (props.theme === "dark" ? "#ffffff" : "#212121")};
  font-size: 16px;
  text-decoration: none;
  padding: 10px;
`;

const Footer = styled.View`
  position: relative;
  margin-top: 64px;
  width: 60%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const TextAnnounce = styled.Text`
  font-size: 21px;
  font-weight: 600;
`;
const LoginButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        width: 64,
        height: 64,
        borderRadius: 100,
        backgroundColor: "#E72963",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: 24,
          height: 48,
          transform: [{ rotate: "180deg" }],
        }}
      >
        <Path
          fill={props.theme === "dark" ? "#212121" : "#ffffff"}
          d="M20 44 0 24 20 4l2.8 2.85L5.65 24 22.8 41.15Z"
        />
      </Svg>
    </TouchableOpacity>
  );
};
const ChangeButton = () => {
  return (
    <TouchableOpacity style={{ marginTop: 32, width: "60%" }}>
      <Text
        style={{
          textDecorationLine: "underline",
          marginLeft: 16,
          opacity: 0.8,
        }}
      >
        Sign up
      </Text>
    </TouchableOpacity>
  );
};

const Login = () => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme);
  useEffect(() => {
    setTheme(colorScheme);
  }, [colorScheme]);
  return (
    <Container>
      <Background />
      <ArrowBack theme={colorScheme} />
      <Title>Welcome{"\n"}Back</Title>
      <InputContainer>
        <Input
          colorScheme={theme}
          placeholder="Username"
          style={{
            borderBottomColor: colorScheme === "dark" ? "#f2949d" : "#212121",
            borderBottomWidth: 2,
          }}
        ></Input>
        <Input
          colorScheme={theme}
          placeholder="Password"
          secureTextEntry={true}
          style={{
            borderBottomColor: colorScheme === "dark" ? "#f2949d" : "#212121",
            borderBottomWidth: 2,
          }}
        ></Input>
        <Footer>
          <TextAnnounce>Sign in</TextAnnounce>
          <LoginButton theme={theme} />
        </Footer>
        <ChangeButton />
      </InputContainer>
    </Container>
  );
};

export default Login;
