import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Colors from "../../theme/colors";
import ExitModal from "../../components/exitModal";

import Home from "../../screens/home/index";
import { createIconSetFromFontello } from "react-native-vector-icons";
import { useTheme } from "@react-navigation/native";
import CreateDonation from "../../screens/create";
import MyPosts from "../../screens/myPosts";

const Tab = createMaterialBottomTabNavigator();

const NavBottom = ({ route }) => {
  const { userData } = route.params;

  const theme = useTheme();
  theme.colors.secondaryContainer = "transperent"

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

      <Tab.Screen name="MyPosts" component={MyPosts}
        initialParams={{ userData }}
        options={{
          tabBarLabel: "Meus Posts",
          tabBarIcon: ({ color }) => (
            <CustomIcon name="home" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen name="Criar" component={CreateDonation}
        initialParams={{ userData }}
        options={{
          tabBarLabel: "Criar",
          tabBarIcon: ({ color }) => (
            <CustomIcon name="plus" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen name="Exit" component={ExitModal}
        initialParams={{ userData }}
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
