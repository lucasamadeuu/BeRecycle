import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import NavigationDoador from "../navigations/navigationDoador/index";
import NavigationBeneficiario from "../navigations/navigationBeneficiario/index"
import navigationSignUp from "../navigations/navigationSignUp/index"

import Login from "../screens/login/index";
import Home from "../screens/home/index";
import Classes from "../screens/classes/index";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SignUp from "../screens/signup";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
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
          <Stack.Screen name="Classes" component={Classes} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
