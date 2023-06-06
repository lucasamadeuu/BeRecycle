import { ScrollView, View } from "react-native"
import styles from "./style";
import DonationCard from "../../../components/donationCard";
import SafeArea from "../../../components/safeArea";
import UserInfo from "../../../components/UserInfo";
import global from "../../../theme/global";

export default function Home({ route, navigation }) {
    const { userData } = route.params;
    const { cep } = JSON.parse(userData);

    const donations = [
        {
            name: 'Lucas Amadeu',
            description: '1x cesta básica contendo:',
            local: "São Paulo, SP",
            email: 'lucas.amadeu.soares@gmail.com',
            phone: '(11) 95078-2114'
        },
        {
            name: 'David Augusto',
            description: '1x caixa com aspargos',
            local: "São Paulo, SP",
            email: 'david086@gmail.com',
            phone: '(11) 99653-1071'
        },
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