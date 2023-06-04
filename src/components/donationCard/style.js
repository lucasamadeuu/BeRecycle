import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

export default StyleSheet.create({
    cardContainer: {
        backgroundColor: Colors.cardBackground,
        display: "flex",
        padding: 30,
        borderRadius: 10,
        gap: 40
    },
    infoContainer: {
        display: "flex",
        gap: 20
    },
    seeContainer: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});