import { ScrollView, View } from "react-native"
import styles from "./style";
import DonationCard from "../../../components/donationCard";
import SafeArea from "../../../components/safeArea";
import UserInfo from "../../../components/UserInfo";
import global from "../../../theme/global";
import Colors from "../../../theme/colors";

export default function Home({ route, navigation }) {
    const { userData } = route.params;
    const { cep } = JSON.parse(userData);

    const donations = [
        {
            name: 'Lucas Amadeu',
            description: '1x cesta básica contendo:',
            cep: cep
        },
        {
            name: 'David Augusto',
            description: '1x caixa com aspargos',
            cep: cep
        },
        {
            name: 'David Augusto',
            description: '1x caixa com aspargos',
            cep: cep
        },
        {
            name: 'David Augusto',
            description: '1x caixa com aspargos',
            cep: cep
        }
    ]

    return (
        <SafeArea>
            <ScrollView style={global.allPage}>
                <View>
                    <UserInfo userData={userData} />
                </View>
                <View style={styles.donationContainer}>
                    {donations.map((item, index) => {
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