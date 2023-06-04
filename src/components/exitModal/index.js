import { useState } from "react";
import { Text, View } from "react-native";
import Button from "../button";
import ReactNativeModal from "react-native-modal";
import Colors from "../../theme/colors";
import styles from "./style";
import RegularText from "../texts";

export default function ExitModal({ navigation, route }) {
  const { openModal, userData } = route.params;

  const { title } = JSON.parse(userData);

  console.log(title)

  const logout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  const cancel = () => {
    if (title == "teacher") {
      navigation.reset({
        index: 0,
        routes: [{ name: "Navigation" }],
      });
    } else {
      navigation.reset({
        index: 0,
        routes: [{ name: "NavigationBeneficiario" }],
      });
    }
  };

  return (
    <ReactNativeModal isVisible={openModal} style={styles.container}>
      <View>
        <View style={{ marginBottom: 50 }}>
          <RegularText
            weight="Regular"
            color={Colors.textLight}
            fontSize={14}
            content="Tem certeza que deseja sair?"
          />
        </View>
        <View>
          <View style={{ marginBottom: 15 }}>
            <Button action={logout} text="logout" color={Colors.primary} />
          </View>
          <View>
            <Button action={cancel} text="cancelar" color={Colors.error} />
          </View>
        </View>
      </View>
    </ReactNativeModal>
  );
}
