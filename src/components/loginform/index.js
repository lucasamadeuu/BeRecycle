import { View, TextInput } from 'react-native';
import styles from './style';
import RegularText from '../texts';
import Colors from '../../theme/colors';

export default function LoginForm({ formItems }) {
  return (
    <View style={styles.container}>
      {formItems.map((item, index) => (
        <View key={index} style={{ marginBottom: 25 }}>
          <RegularText weight='Regular' color={Colors.textLight} fontSize={12} content={item.label} />
          <TextInput
            style={[styles.input, { borderWidth: 1, borderColor: item.error != '' ? Colors.error : Colors.inputBackground }]}
            placeholder={item.placeholder}
            value={item.label === 'E-mail' ? item.username : item.password}
            onChangeText={item.label === 'E-mail' ? item.handleUsernameChange : item.handlePasswordChange}
            secureTextEntry={item.label == 'Senha' ? true : false}
          />
          {item.error != '' ? <RegularText weight='Regular' color={Colors.error} fontSize={8} content={item.error} /> : ''}
        </View>
      ))}
    </View>
  );
}
