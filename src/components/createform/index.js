import { View, TextInput } from 'react-native';
import styles from './style';
import RegularText from '../texts';
import Colors from '../../theme/colors';

export default function CreateForm({ formItems, contactItems }) {
    return (
        <View style={styles.container}>
            {formItems.map((item, index) => (
                <View View key={index} style={{ marginBottom: 25 }}>
                    <RegularText weight='Bold' color={Colors.textDark} fontSize={12} content={item.label} />
                    <TextInput
                        onChangeText={(e) => item.CallBack(item.name, e)}
                        value={item.value}
                        placeholder={item.placeholder}
                        style={item.canChange ? [styles.inputEdit, { borderWidth: 1, borderColor: item.error != '' ? Colors.error : Colors.inputBackground }] : styles.input}
                        keyboardType={item.keyboard}
                        maxLength={item.max}
                        secureTextEntry={item.secure}
                        editable={item.canChange}
                        multiline={item.canChange}
                        numberOfLines={item.canChange ? 10 : 1}
                    />
                    {item.error != '' ? <RegularText weight='Regular' color={Colors.error} fontSize={8} content={item.error} /> : ''}
                </View>
            ))
            }

            <View style={styles.contactContainer}>
                <RegularText
                    weight="Bold"
                    color={Colors.darkGrey}
                    fontSize={18}
                    content={"Informações de contato"}
                />
                <View>
                    {contactItems.map((item, index) => (
                        <View View key={index} style={{ marginBottom: 25 }}>
                            <RegularText weight='Bold' color={Colors.textDark} fontSize={12} content={item.label} />
                            <TextInput
                                onChangeText={(e) => item.CallBack(item.name, e)}
                                value={item.value}
                                placeholder={item.placeholder}
                                style={[styles.input, { borderWidth: 1, borderColor: item.canChange ? Colors.error : Colors.inputBackground }]}
                                keyboardType={item.keyboard}
                                maxLength={item.max}
                                secureTextEntry={item.secure}
                                editable={item.canChange}
                            />
                            {item.error != '' ? <RegularText weight='Regular' color={Colors.error} fontSize={8} content={item.error} /> : ''}
                        </View>
                    ))
                    }
                </View>
            </View>

        </View >
    );
}
