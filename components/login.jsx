import styled from "styled-components/native";
import { useColorScheme } from "react-native";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const Background = styled.ImageBackground`
  width: 100%;
  height: 450px;
  flex: 1;
  z-index: -1;
`;

const ArrowBack = styled.Image``;

const Title = styled.Text`
  font-size: 42px;
  position: relative;
  top: 200px;
  left: 5%;
  color: #212121;
`;
const InputContainer = styled.View`
  position: relative;
  top: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Input = styled.TextInput`
  width: 60%;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;
  padding: 10px;
`;

const Button = styled.TouchableOpacity``;
const TextButton = styled.Text``;

const Login = () => {
  return (
    <Container>
      <Background
        source={require("../assets/loginBg.png")}
        resizeMode="stretch"
      >
        <Title>Welcome{"\n"}Back</Title>
        <InputContainer>
          <Input
            placeholder="Username"
            style={{ borderBottomColor: "#f2949d", borderBottomWidth: 2 }}
          ></Input>
          <Input
            placeholder="Password"
            secureTextEntry={true}
            style={{ borderBottomColor: "#f2949d", borderBottomWidth: 2 }}
          ></Input>
        </InputContainer>
      </Background>
    </Container>
  );
};

export default Login;
