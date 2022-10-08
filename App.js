import { NativeRouter, Routes, Route } from "react-router-native";
import Home from "./components/Home/Home";
import Sign from "./components/Sign/Sign";

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign:entry" element={<Sign />} />
      </Routes>
    </NativeRouter>
  );
}
