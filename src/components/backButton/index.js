import { Pressable } from "react-native";
import styles from "./style";
import Colors from "../../theme/colors";
import RegularText from "../texts";
import { createIconSetFromFontello } from "react-native-vector-icons";

export default function BackButton({ action, iconColor, color }) {

  const CustomIcon = createIconSetFromFontello(
    require("../../../assets/images/config.json"),
    "fontello"
  );

  return (
    <Pressable onPress={action} style={[styles.button, { backgroundColor: color }]}>
      <CustomIcon name="go-back" color={iconColor} size={14} />
    </Pressable>
  );
}
