import { ScrollView, View } from "react-native"
import styles from "./style";
import DonationCardExcluded from "../../components/donationCardExcluded";
import SafeArea from "../../components/safeArea";
import UserInfo from "../../components/UserInfo";
import global from "../../theme/global";
import { useEffect, useState } from "react";
import { getInfoById } from "../../context/Integration";
import Loading from "../../components/loading";
import { useIsFocused } from "@react-navigation/native";

export default function MyPosts({ route, navigation }) {
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
        getInfoById(setResp, 'post/user', userData.id)
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
                                <DonationCardExcluded
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