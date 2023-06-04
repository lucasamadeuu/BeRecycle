import { Text } from "react-native";

export default function RegularText({ color, content, weight, fontSize }) {

    const poppins = `Poppins-${weight}`

    return (
        <Text style={{ color: color, fontFamily: poppins, fontSize: fontSize }}>{content}</Text>
    )
}