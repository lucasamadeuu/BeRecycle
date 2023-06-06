import { useState } from "react";
import { Text, View } from "react-native";
import Button from "../button";
import ReactNativeModal from "react-native-modal";
import Colors from "../../theme/colors";
import styles from "./style";
import RegularText from "../texts";

export default function ExitModal({ navigation, route }) {
  const { userData } = route.params;

  const partsName = userData.name.split(" ");
  const firstName = partsName[0];

  const logout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  const cancel = () => {
    navigation.navigate("Home")
  };

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 50 }}>
        <RegularText
          weight="Regular"
          color={Colors.textLight}
          fontSize={14}
          content={`${firstName}, tem certeza que deseja sair?`}
        />
      </View>
      <View style={{ width: '100%' }}>
        <View style={{ marginBottom: 15, width: '100%' }}>
          <Button action={logout} text="logout" color={Colors.primary} />
        </View>
        <View>
          <Button action={cancel} text="cancelar" color={Colors.secondary} />
        </View>
      </View>
    </View>
  );
}
