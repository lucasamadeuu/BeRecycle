import RegularText from "../texts";
import Colors from "../../theme/colors";
import moment from "moment/moment";
import "moment/locale/pt-br";
import { View } from "react-native";
import styles from "./style";

export default function UserInfo({ userData }) {
  moment.locale("pt-br");
  let date = moment().format("DD MMMM");

  const { email, title } = JSON.parse(userData);
  const firstName = email.split(" ")[0];
  const capitalizedUsername =
    firstName.charAt(0).toUpperCase() + firstName.slice(1);
  const firstLetter = capitalizedUsername.charAt(0);

  return (
    <View style={styles.container}>
      <View>
        <RegularText
          weight="SemiBold"
          color={Colors.textLight}
          fontSize={12}
          content={date}
        />
        <RegularText
          weight="SemiBold"
          color={Colors.darkGrey}
          fontSize={20}
          content={`Olá, ${title == "teacher" ? 'Prof. ' : ''}${capitalizedUsername}`}
        />
      </View>
      <View style={styles.letterIcon}>
        <RegularText
          weight="SemiBold"
          color={Colors.baseBackground}
          fontSize={24}
          content={firstLetter}
        />
      </View>
    </View>
  );
}
