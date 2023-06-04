import Colors from "../../theme/colors";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SignUp from "../../screens/signup";
import SafeArea from "../../components/safeArea";

const Tab = createMaterialTopTabNavigator();

const NavTop = () => {
  return (
    <SafeArea>
      <Tab.Navigator
        barStyle={{
          backgroundColor: Colors.baseBackground,
          paddingBottom: "1%",
          paddingTop: "1%",
        }}
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.lightGrey,
          tabBarLabelStyle: {
            fontSize: 11,
          },
        })}
      >
        <Tab.Screen
          name="Doador"
          initialParams={{ userType: "Doador" }}
          component={SignUp}
          options={{ tabBarLabel: "Doador" }}
        />
        <Tab.Screen
          name="Beneficiario"
          initialParams={{ userType: "Beneficiario" }}
          component={SignUp}
          options={{ tabBarLabel: "Beneficiário" }}
        />
        <Tab.Screen
          name="Transportador"
          initialParams={{ userType: "Transportador" }}
          component={SignUp}
          options={{ tabBarLabel: "Transportador" }}
        />
      </Tab.Navigator>
    </SafeArea>
  );
};

export default NavTop;
