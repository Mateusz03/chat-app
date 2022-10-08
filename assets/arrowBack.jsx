import React from "react";
import { TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
function ArrowBack(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.style2}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        fill={props.fill === "light" ? "#ffffff" : "#212121"}
        style={props.style}
      >
        <Path d="M20 44L0 24 20 4l2.8 2.85L5.65 24 22.8 41.15z"></Path>
      </Svg>
    </TouchableOpacity>
  );
}

export default ArrowBack;
