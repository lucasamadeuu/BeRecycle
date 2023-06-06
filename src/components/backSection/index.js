import React from "react";
import { View } from "react-native";
import Colors from "../../theme/colors";
import BackButton from "../backButton";
import RegularText from "../texts";
import style from "./style";

export default function BackSection({ navigation, type }) {
    return (
        <View style={style.container}>
            <BackButton
                action={() => navigation.goBack()}
                color={Colors.primary}
                iconColor={Colors.white}
            />
            <RegularText weight='Bold' color={Colors.darkGrey} fontSize={18} content={`Informações ${type}`} />
        </View>
    );
}