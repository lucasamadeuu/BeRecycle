import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import NavigationDoador from "../navigations/navigationDoador/index";
import NavigationBeneficiario from "../navigations/navigationBeneficiario/index"
import NavigationTransportador from "../navigations/navigationTransportador/index"
import navigationSignUp from "../navigations/navigationSignUp/index"

import Login from "../screens/login/index";
import Home from "../screens/home/index";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SignUp from "../screens/signup";
import Colors from "../theme/colors";
import { StatusBar } from "react-native";
import DonationInfo from "../components/donationInfo/index";
import MyPosts from "../screens/myPosts";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
                gestureEnabled: true,
                cardOverlayEnabled: true,
              }}
            />
            <Stack.Screen
              name="NavigationDoador"
              component={NavigationDoador}
              options={{
                headerShown: false,
                gestureEnabled: true,
                cardOverlayEnabled: true,
              }}
            />
            <Stack.Screen
              name="NavigationBeneficiario"
              component={NavigationBeneficiario}
              options={{
                headerShown: false,
                gestureEnabled: true,
                cardOverlayEnabled: true,
              }}
            />
            <Stack.Screen
              name="NavigationTransportador"
              component={NavigationTransportador}
              options={{
                headerShown: false,
                gestureEnabled: true,
                cardOverlayEnabled: true,
              }}
            />
            <Stack.Screen
              name="Cadastrar"
              component={navigationSignUp}
              options={{
                headerShown: false,
                gestureEnabled: true,
                cardOverlayEnabled: true,
              }}
            />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="MyPosts" component={MyPosts} />
            <Stack.Screen options={{
              headerShown: false,
              gestureEnabled: true,
              cardOverlayEnabled: true,
            }} name="Donation" component={DonationInfo} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
