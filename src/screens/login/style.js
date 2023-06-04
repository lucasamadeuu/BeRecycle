import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

export default StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    padding: 20,
  },
  mainContainer: {
    backgroundColor: Colors.white,
    height: "100%",
    alignItems: "center",
    paddingTop: '20%'
  },
  formContainer: {
    paddingTop: 50,
    marginTop: '15%',
    display: 'flex',
    alignItems: 'flex-start',
  },
  all: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  messageNotFound: {
    marginBottom: 30,
    marginTop: -10
  }
});
