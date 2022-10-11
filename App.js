import { StatusBar } from "expo-status-bar";
import { NativeRouter, Routes, Route } from "react-router-native";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import Home from "./components/home";
import Sign from "./components/sign";

const { height, width } = Dimensions.get("window");

const AppContainer = styled.View`
  width: ${width}px;
  height: ${height}px;
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <AppContainer>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign:Entry" element={<Sign />} />
        </Routes>
      </NativeRouter>
      <StatusBar style="auto" />
    </AppContainer>
  );
}
