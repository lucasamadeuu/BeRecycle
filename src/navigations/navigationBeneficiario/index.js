import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Colors from "../../theme/colors";
import ExitModal from "../../components/exitModal";

import Home from "../../screens/homeStudent/index";
import Grades from "../../screens/grades/index";
import { createIconSetFromFontello } from "react-native-vector-icons";

const Tab = createMaterialBottomTabNavigator();

const NavBottom = ({ route }) => {
  const { userData } = route.params;

  const CustomIcon = createIconSetFromFontello(
    require("../../../assets/images/config.json"),
    "fontello"
  );
  return (
    <Tab.Navigator activeColor={Colors.primary} inactiveColor={Colors.lightGrey}
      barStyle={{
        backgroundColor: Colors.baseBackground,
        paddingBottom: "1%",
        paddingTop: "1%",
      }}
    >
      <Tab.Screen name="Home" component={Home}
        initialParams={{ userData }}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <CustomIcon name="home" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen name="Classes" component={Grades}
        initialParams={{ userData }}
        options={{
          tabBarLabel: "Boletim",
          tabBarIcon: ({ color }) => (
            <CustomIcon name="grades" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen name="Exit" component={ExitModal}
        initialParams={{ openModal: true, userData }}
        options={{
          tabBarLabel: "Sair",
          tabBarIcon: ({ color }) => (
            <CustomIcon name="sign-out" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavBottom;
