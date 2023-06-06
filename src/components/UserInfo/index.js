import RegularText from "../texts";
import Colors from "../../theme/colors";
import moment from "moment/moment";
import "moment/locale/pt-br";
import { View } from "react-native";
import styles from "./style";

export default function UserInfo({ userData }) {
  const partsName = userData.name.split(" ");
  const firstName = partsName[0];
  const lastName = partsName[partsName.length - 1];
  const capitalizedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  const capitalizedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  const allName = capitalizedFirstName + " " + capitalizedLastName

  const firstLetter = capitalizedFirstName.charAt(0);

  return (
    <View style={styles.container}>
      <View>
        <RegularText
          weight="Bold"
          color={Colors.primary}
          fontSize={18}
          content={`Olá, ${allName}!`}
        />
        <RegularText
          weight="Regular"
          color={Colors.textLight}
          fontSize={11}
          content={`Você está logado como ${userData.type}`}
        />
      </View>
      <View style={styles.letterIcon}>
        <RegularText
          weight="Bold"
          color={Colors.baseBackground}
          fontSize={24}
          content={firstLetter}
        />
      </View>
    </View>
  );
}
