import styled from "styled-components/native";
import { useParams } from "react-router-native";
import Login from "./login";
import Register from "./register";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const Sign = () => {
  const { Entry } = useParams();
  return (
    <Container>
      {Entry === "In" && <Login />}
      {Entry === "Up" && <Register />}
    </Container>
  );
};
export default Sign;
