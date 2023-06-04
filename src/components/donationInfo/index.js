import React from "react";
import { Text, TouchableOpacity } from "react-native";
import SafeArea from "../safeArea";
import { ScrollView } from "react-native";
import { View } from "react-native";
import UserInfo from "../UserInfo";
import global from "../../theme/global";
import Colors from "../../theme/colors";
import BackButton from "../backButton";

export default function DonationInfo({ navigation, route }) {
    const { userData } = route.params;

    console.log("oi", userData)

    return (
        <SafeArea>
            <ScrollView style={global.allPage}>
                <View>
                    <UserInfo userData={userData} />
                </View>
                <BackButton
                    action={() => navigation.goBack()}
                    color={Colors.primary}
                    iconColor={Colors.white}
                />
            </ScrollView>
        </SafeArea>
    );
}
