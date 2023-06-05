import { View } from "react-native";
import style from "./style";
import RegularText from "../texts";
import Colors from "../../theme/colors";
import { createIconSetFromFontello } from "react-native-vector-icons";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { getAxios } from "../../context/Integration";
import { Pressable } from "react-native";
import { TouchableOpacity } from "react-native";
import InfoCard from "../InfoCard";

export default function DonationCard({ donationData, navigation, userData }) {

    const CustomIcon = createIconSetFromFontello(
        require("../../../assets/images/config.json"),
        "fontello"
    );

    const [cepData, setCepData] = useState(null);

    useEffect(() => {
        getAxios(setCepData, `https://cdn.apicep.com/file/apicep/${donationData.cep}.json`)
    }, []);


    const CardContent = [
        {
            label: 'Doador',
            content: donationData.name
        },
        {
            label: 'Descrição',
            content: donationData.description
        },
        {
            label: 'Localidade',
            content: cepData ? `${cepData.city}, ${cepData.state}` : 'Carregando...'
        },
    ]

    const donorContactInfo = [
        {
            email: donationData.email,
            phone: donationData.phone
        }
    ]

    return (
        <TouchableOpacity onPress={() => navigation.navigate("Donation", { userData: userData, CardContent: CardContent, donorContactInfo: donorContactInfo })}>
            <View style={style.cardContainer}>
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
                <View style={style.seeContainer}>
                    <RegularText weight='Bold' color={Colors.primary} fontSize={12} content={"Ver mais detalhes"} />
                    <CustomIcon name="arrow" color={Colors.primary} size={14} />
                </View>
            </View>
        </TouchableOpacity>
    );
}