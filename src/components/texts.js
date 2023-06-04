import { Text } from "react-native";

export default function RegularText({ color, content, weight, fontSize }) {

    const roboto = `Roboto-${weight}`

    return (
        <Text style={{ color: color, fontFamily: roboto, fontSize: fontSize }}>{content}</Text>
    )
}