import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

export default StyleSheet.create({
  container: {
    padding: 0,
    display: "flex",
    width: '100%'
  },
  input: {
    height: 45,
    borderRadius: 5,
    marginTop: 5,
    padding: 10,
    backgroundColor: Colors.inputBackground,
    fontSize: 10,
    fontFamily: 'Roboto-Regular',
  },
});
