import { ScrollView, View } from "react-native"
import styles from "./style";
import DonationCard from "../../components/donationCard";
import SafeArea from "../../components/safeArea";
import UserInfo from "../../components/UserInfo";
import global from "../../theme/global";
import { useEffect, useState } from "react";
import { getInfo } from "../../context/Integration";
import { baseUrl } from "../../services/api";
import Loading from "../../components/loading";
import { useIsFocused } from "@react-navigation/native";

export default function Home({ route, navigation }) {
    const { userData } = route.params;
    const [resp, setResp] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const isFocused = useIsFocused();

    useEffect(() => {
        if (resp != null) {
            setIsLoading(false)
        }
    }, [resp])

    useEffect(() => {
        getInfo((data) => {
            const { content } = data;

            const formattedData = content.map(({ description, email, id, name, phone, type, userId, local }) => ({
                description,
                email,
                id,
                name,
                phone,
                type,
                userId,
                local
            }));

            setResp(formattedData);
        }, "post");
    }, [isFocused])

    if (isLoading) {
        return <Loading />;
    } else {
        return (
            <SafeArea>
                <ScrollView style={global.allPage}>
                    <View>
                        <UserInfo userData={userData} />
                    </View>
                    <View style={styles.donationContainer}>
                        {resp.map((item, index) => {
                            return (
                                <DonationCard
                                    key={index}
                                    donationData={item}
                                    navigation={navigation}
                                    userData={userData}
                                />
                            )
                        })}
                    </View>
                </ScrollView>
            </SafeArea>
        )
    }

}