import { View, Text } from "react-native";
import Button from "./Button";
import styles from "./styles";
const Home = () => {
  return (
    <View style={styles.home}>
      <Text style={styles.title}>Chat{"\n"}App</Text>
      <Button
        name="Login"
        style={styles.button}
        fontStyle={styles.text}
        login={styles.login}
      />
      <Button
        name="Register"
        style={styles.button}
        fontStyle={styles.text}
        register={styles.register}
      />
    </View>
  );
};

export default Home;
