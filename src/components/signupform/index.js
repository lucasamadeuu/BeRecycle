import { View, TextInput } from 'react-native';
import styles from './style';
import RegularText from '../texts';
import Colors from '../../theme/colors';

export default function SignUpForm({ formItems }) {
  return (
    <View style={styles.container}>
      {formItems.map((item, index) => (
        <View key={index} style={{ marginBottom: 25 }}>
          <RegularText weight='Regular' color={Colors.textLight} fontSize={12} content={item.label} />
          <TextInput
            onChangeText={(e) => item.CallBack(item.name, e)}
            value={item.value}
            placeholder={item.placeholder}
            style={styles.input}
          />
        </View>
      ))}
    </View>
  );
}
