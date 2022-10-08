import React from "react";
import { TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";

function SignButton(props) {
  return (
    <TouchableOpacity style={props.signButtonContainer}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 22 36"
        style={props.style}
      >
        <Path
          fill="#fff"
          d="M2.702 36L0 33.435 16.548 18 0 2.565 2.702 0 22 18 2.702 36z"
        ></Path>
      </Svg>
    </TouchableOpacity>
  );
}

export default SignButton;
