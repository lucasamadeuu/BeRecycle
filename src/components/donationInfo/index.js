import React from "react";
import SafeArea from "../safeArea";
import { ScrollView } from "react-native";
import { View } from "react-native";
import UserInfo from "../UserInfo";
import global from "../../theme/global";
import style from "./style";
import BackSection from "../backSection";
import InfoCard from "../InfoCard";
import InfoContact from "../infoContact";

export default function DonationInfo({ navigation, route }) {
    const { userData, CardContent, donorContactInfo, donationData } = route.params;

    console.log(CardContent)

    return (
        <SafeArea>
            <ScrollView style={global.allPage}>
                <View>
                    <UserInfo userData={userData} />
                </View>

                <BackSection navigation={navigation} type={donationData.type == "Doador" ? "da doação" : "dos materiais"} />

                <View style={style.infoContainer}>
                    {CardContent.map((item, index) => {
                        return (
                            <InfoCard
                                key={index}
                                label={item.label}
                                content={item.content}
                                size={12}
                            />
                        )
                    })}
                </View>

                <View style={style.contactContainer}>
                    <InfoContact
                        type={donationData.type}
                        donorContactInfo={donorContactInfo}
                    />
                </View>

            </ScrollView>
        </SafeArea>
    );
}
