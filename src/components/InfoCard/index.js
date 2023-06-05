import RegularText from "../texts";
import Colors from "../../theme/colors";
import { View } from "react-native";

export default function InfoCard({ label, content, size }) {
    return (
        <View>
            <RegularText weight='Bold' color={Colors.textDark} fontSize={size} content={label} />
            <RegularText weight='Regular' color={Colors.textLight} fontSize={size} content={content} />
        </View>

    );
}