import { View } from "react-native";
import style from "./style";
import RegularText from "../texts";
import Colors from "../../theme/colors";
import { createIconSetFromFontello } from "react-native-vector-icons";
import { TouchableOpacity } from "react-native";
import InfoCard from "../InfoCard";
import Button from "../button";
import { deleteInfoById } from "../../context/Integration";
import { useState } from "react";

export default function DonationCardExcluded({ donationData, navigation, userData }) {
    const CustomIcon = createIconSetFromFontello(
        require("../../../assets/images/config.json"),
        "fontello"
    );

    const [resp, setResp] = useState(null)

    const CardContent = [
        {
            label: donationData.type,
            content: donationData.name
        },
        {
            label: 'Descrição',
            content: donationData.description
        },
        {
            label: 'Localidade',
            content: donationData.local
        },
    ]

    const donorContactInfo = [
        {
            email: donationData.email,
            phone: donationData.phone
        }
    ]

    const RemovePost = () => {
        deleteInfoById(setResp, 'post', donationData.id)

        navigation.navigate('Home')
    }

    return (
        <TouchableOpacity onPress={() => navigation.navigate("Donation", { userData: userData, CardContent: CardContent, donorContactInfo: donorContactInfo, donationData: donationData })}>
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
                <Button
                    action={donationData.active == 1 ? () => RemovePost() : () => console.log("já excluído")}
                    text={donationData.active == 1 ? 'Excluir Post' : 'Post excluído'}
                    color={donationData.active == 1 ? Colors.error : Colors.textLight}
                />
            </View>
        </TouchableOpacity>
    );
}