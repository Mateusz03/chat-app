import styled from "styled-components/native";
import { useNavigate } from "react-router-native";
import { useColorScheme } from "react-native";
import { useEffect, useState } from "react";

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.Text`
  text-align: center;
  font-size: 48px;
  font-weight: 500;
  color: #eb2562;
  margin-bottom: 20%;
`;
const Button = styled.TouchableOpacity`
  padding: 15px 30px 15px 30px;
  border-radius: 5px;
  margin: 8%;
  background-color: ${(props) =>
    props.button === "Login" ? "transparent" : "#EB2562"};
`;
const TextButton = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => (props.theme === "dark" ? "#212121" : "#ffffff")};
`;

const Home = () => {
  const navigate = useNavigate();
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme);

  useEffect(() => {
    setTheme(colorScheme);
  }, [colorScheme]);

  const onPress = (e) => {
    if (e === "Login") return navigate("/signIn");
    else return navigate("/signUp");
  };

  return (
    <Container>
      <Title>Chat{"\n"}app</Title>
      <Button
        button="Login"
        onPress={() => {
          onPress("Login");
        }}
      >
        <TextButton theme={theme}>Login</TextButton>
      </Button>
      <Button
        button="Register"
        onPress={() => {
          onPress("Register");
        }}
      >
        <TextButton theme={theme}>Register</TextButton>
      </Button>
    </Container>
  );
};
export default Home;
