import { ScrollView, Text, View } from "react-native";
import SignUpForm from "../../components/signupform";
import { useEffect, useReducer, useState } from "react";
import Button from "../../components/button";
import Colors from "../../theme/colors";
import RegularText from "../../components/texts";

export default function SignUp({ navigation, route }) {
    const { userType } = route.params;
    const [form, setForm] = useState({})
    const [error, setError] = useState('')

    useEffect(() => {
        CallBack('type', userType)
    }, [])

    const CallBack = (key, value) => {
        var clone = Object.assign({}, form)
        clone[key] = value
        setForm(clone)
    }

    const Login = () => {
        var clone = Object.assign({}, form)
        clone.login = true
        setData('user', clone)
        navigation.navigate('Home')
    }

    const Validated = () => {
        //ajustar dependendo da necessidade
    }

    const SignUp = () => {
        (Validated())
            ? Login()
            : setError('preencha o formulario corretamente')
    }

    const formItems = [
        [
            {
                name: 'name',
                label: 'nome',
                value: form.name,
                placeholder: 'nome',
                CallBack: CallBack
            },
            {
                name: 'email',
                label: 'e-mail',
                value: form.email,
                placeholder: 'e-mail',
                CallBack: CallBack
            },
            {
                name: 'address',
                label: 'endereço',
                value: form.address,
                placeholder: 'endereço',
                CallBack: CallBack
            },
            {
                name: 'phone',
                label: 'telefone',
                value: form.phone,
                placeholder: 'telefone',
                CallBack: CallBack
            },
            {
                name: 'cnpj',
                label: 'CNPJ',
                value: form.cnpj,
                placeholder: 'cnpj',
                CallBack: CallBack
            },
            {
                name: 'pass',
                label: 'senha',
                value: form.pass,
                placeholder: 'senha',
                CallBack: CallBack
            }
        ],
        [
            {
                name: 'name',
                label: 'nome',
                value: form.name,
                placeholder: 'nome',
                CallBack: CallBack
            },
            {
                name: 'email',
                label: 'e-mail',
                value: form.email,
                placeholder: 'e-mail',
                CallBack: CallBack
            },
            {
                name: 'address',
                label: 'endereço',
                value: form.address,
                placeholder: 'endereço',
                CallBack: CallBack
            },
            {
                name: 'phone',
                label: 'telefone',
                value: form.phone,
                placeholder: 'telefone',
                CallBack: CallBack
            },
            {
                name: 'pass',
                label: 'senha',
                value: form.pass,
                placeholder: 'senha',
                CallBack: CallBack
            }
        ],
        [
            {
                name: 'name',
                label: 'nome',
                value: form.name,
                placeholder: 'nome',
                CallBack: CallBack
            },
            {
                name: 'email',
                label: 'e-mail',
                value: form.email,
                placeholder: 'e-mail',
                CallBack: CallBack
            },
            {
                name: 'address',
                label: 'endereço',
                value: form.address,
                placeholder: 'endereço',
                CallBack: CallBack
            },
            {
                name: 'phone',
                label: 'telefone',
                value: form.phone,
                placeholder: 'telefone',
                CallBack: CallBack
            },
            {
                name: 'cnh',
                label: 'cnh',
                value: form.cnh,
                placeholder: 'cnh',
                CallBack: CallBack
            },
            {
                name: 'vehicle',
                label: 'Placa do veículo',
                value: form.vehicle,
                placeholder: 'Placa do veículo',
                CallBack: CallBack
            },
            {
                name: 'pass',
                label: 'senha',
                value: form.pass,
                placeholder: 'senha',
                CallBack: CallBack
            }
        ]
    ];

    const checkUserType = () => {
        switch (userType) {
            case 'Doador':
                return formItems[0]
            case 'Beneficiario':
                return formItems[1]
            default:
                return formItems[2]
        }
    }

    return (
        <ScrollView>
            <SignUpForm formItems={checkUserType()} />
            <RegularText weight='Regular' color={Colors.error} fontSize={12} content={error} />
            <View style={{ width: "70%", alignSelf: "center" }}>
                <Button
                    action={() => SignUp()}
                    text="Cadastrar"
                    color={Colors.primary}
                />
            </View>
        </ScrollView>
    );
}
