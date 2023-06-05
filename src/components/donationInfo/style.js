import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    infoContainer: {
        display: "flex",
        paddingTop: 50,
        gap: 15
    },
    contactContainer: {
        paddingTop: 100
    }
});