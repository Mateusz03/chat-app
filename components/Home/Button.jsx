import { TouchableOpacity, Text } from "react-native";
import { useNavigate } from "react-router-native";

const Button = (props) => {
  const navigate = useNavigate();
  const onPress = (e) => {
    if (e === "Login") {
      navigate("/signIn");
      return;
    } else if (e === "Register") {
      navigate("/signUp");
      return;
    }
    navigate("/");
  };
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(props.name);
      }}
      style={{ ...props.style, ...props.register }}
    >
      <Text style={{ ...props.fontStyle, ...props.login }}>{props.name}</Text>
    </TouchableOpacity>
  );
};
export default Button;
