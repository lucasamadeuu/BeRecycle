import { Pressable, ScrollView, Text, View } from "react-native";
import SignUpForm from "../../components/signupform";
import { useEffect, useReducer, useState } from "react";
import Button from "../../components/button";
import Colors from "../../theme/colors";
import RegularText from "../../components/texts";
import { hasCep, hasCnh, hasCnpj, hasEmail, hasEndereco, hasName, hasPassword, hasPhone, hasVehicle } from "../../context/validForm";
import Svgs from "../../../assets/images/svgs";
import SafeArea from "../../components/safeArea";
import { SvgXml } from "react-native-svg";
import style from "./style";

export default function SignUp({ navigation, route }) {
    const { userType } = route.params;
    const [form, setForm] = useState({})
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [cep, setCep] = useState('')
    const [cnh, setCnh] = useState('')
    const [vehicle, setVehicle] = useState('')
    const Logo = Svgs.logo;

    console.log(form)

    useEffect(() => {
        CallBack('type', userType)
    }, [])

    const [isSignUpClicked, setIsSignUpClicked] = useState(false);

    useEffect(() => {
        if (isSignUpClicked) {
            if (!hasName(form.name)) {
                setName('Preencha o nome corretamente - ex: Lucas Amadeu');
            } else {
                setName('');
            }
            if (!hasVehicle(form.vehicle)) {
                setVehicle('Preencha a placa do veículo corretamente');
            } else {
                setVehicle('');
            }
            if (!hasCep(form.cep)) {
                setCep('Preencha o cep corretamente');
            } else {
                setCep('');
            }
            if (!hasEmail(form.email)) {
                setEmail('Preencha o e-mail corretamente');
            } else {
                setEmail('');
            }
            if (!hasPhone(form.phone)) {
                setPhone('Preencha o telefone corretamente');
            } else {
                setPhone('');
            }
            if (!hasPassword(form.pass)) {
                setPassword('Preencha a senha corretamente - mínimo 6 caracteres');
            } else {
                setPassword('');
            }
            if (!hasCnpj(form.cnpj)) {
                setCnpj('Preencha o CNPJ corretamente');
            } else {
                setCnpj('');
            }
            if (!hasCnh(form.cnh)) {
                setCnh('Preencha a CNH corretamente');
            } else {
                setCnh('');
            }
        }
    }, [isSignUpClicked, form.name, form.email, form.phone, form.pass, form.cnpj, form.cep, form.cnh, form.vehicle]);

    const CallBack = (key, value) => {
        var clone = Object.assign({}, form)
        clone[key] = value
        setForm(clone)
    }

    const SignUp = () => {
        setIsSignUpClicked(true)
    }

    const formItems = [
        [
            {
                name: 'name',
                label: 'Nome *',
                value: form.name,
                placeholder: 'nome completo',
                CallBack: CallBack,
                keyboard: 'default',
                max: 100,
                secure: false,
                hasMask: false,
                error: name
            },
            {
                name: 'email',
                label: 'E-mail *',
                value: form.email,
                placeholder: 'e-mail',
                CallBack: CallBack,
                keyboard: 'email-address',
                max: 100,
                secure: false,
                hasMask: false,
                error: email
            },
            {
                name: 'cep',
                label: 'Cep *',
                value: form.cep,
                placeholder: 'cep',
                CallBack: CallBack,
                keyboard: 'phone-pad',
                max: 8,
                secure: false,
                hasMask: true,
                typeMask: 'zip-code',
                error: cep
            },
            {
                name: 'housenumber',
                label: 'Número casa',
                value: form.housenumber,
                placeholder: 'número casa',
                CallBack: CallBack,
                keyboard: 'phone-pad',
                max: 8,
                secure: false,
                hasMask: false,
                error: ''
            },
            {
                name: 'phone',
                label: 'Telefone *',
                value: form.phone,
                placeholder: 'telefone',
                CallBack: CallBack,
                keyboard: 'phone-pad',
                max: 15,
                secure: false,
                hasMask: true,
                typeMask: 'cel-phone',
                error: phone
            },
            {
                name: 'cnpj',
                label: 'CNPJ *',
                value: form.cnpj,
                placeholder: 'cnpj',
                CallBack: CallBack,
                keyboard: 'phone-pad',
                max: 18,
                secure: false,
                hasMask: true,
                typeMask: 'cnpj',
                error: cnpj
            },
            {
                name: 'pass',
                label: 'Senha *',
                value: form.pass,
                placeholder: 'senha',
                CallBack: CallBack,
                keyboard: 'default',
                max: 20,
                secure: true,
                hasMask: false,
                error: password
            }
        ],
        [
            {
                name: 'name',
                label: 'Nome *',
                value: form.name,
                placeholder: 'nome completo',
                CallBack: CallBack,
                keyboard: 'default',
                max: 100,
                secure: false,
                hasMask: false,
                error: name
            },
            {
                name: 'email',
                label: 'E-mail *',
                value: form.email,
                placeholder: 'e-mail',
                CallBack: CallBack,
                keyboard: 'email-address',
                max: 100,
                secure: false,
                hasMask: false,
                error: email
            },
            {
                name: 'cep',
                label: 'Cep *',
                value: form.cep,
                placeholder: 'cep',
                CallBack: CallBack,
                keyboard: 'phone-pad',
                max: 8,
                secure: false,
                hasMask: true,
                typeMask: 'zip-code',
                error: cep
            },
            {
                name: 'housenumber',
                label: 'Número casa',
                value: form.housenumber,
                placeholder: 'número',
                CallBack: CallBack,
                keyboard: 'phone-pad',
                max: 8,
                secure: false,
                hasMask: false,
                error: ''
            },
            {
                name: 'phone',
                label: 'Telefone *',
                value: form.phone,
                placeholder: 'telefone',
                CallBack: CallBack,
                keyboard: 'phone-pad',
                max: 15,
                secure: false,
                hasMask: true,
                typeMask: 'cel-phone',
                error: phone
            },
            {
                name: 'pass',
                label: 'Senha *',
                value: form.pass,
                placeholder: 'senha',
                CallBack: CallBack,
                keyboard: 'default',
                max: 20,
                secure: true,
                hasMask: false,
                error: password
            }
        ],
        [
            {
                name: 'name',
                label: 'Nome *',
                value: form.name,
                placeholder: 'nome completo',
                CallBack: CallBack,
                keyboard: 'default',
                max: 100,
                secure: false,
                hasMask: false,
                error: name
            },
            {
                name: 'email',
                label: 'E-mail *',
                value: form.email,
                placeholder: 'e-mail',
                CallBack: CallBack,
                keyboard: 'email-address',
                max: 100,
                secure: false,
                hasMask: false,
                error: email
            },
            {
                name: 'cep',
                label: 'Cep *',
                value: form.cep,
                placeholder: 'cep',
                CallBack: CallBack,
                keyboard: 'phone-pad',
                max: 8,
                secure: false,
                hasMask: true,
                typeMask: 'zip-code',
                error: cep
            },
            {
                name: 'housenumber',
                label: 'número casa',
                value: form.housenumber,
                placeholder: 'número',
                CallBack: CallBack,
                keyboard: 'phone-pad',
                max: 8,
                secure: false,
                hasMask: false,
                error: ''
            },
            {
                name: 'phone',
                label: 'Telefone *',
                value: form.phone,
                placeholder: 'telefone',
                CallBack: CallBack,
                keyboard: 'phone-pad',
                max: 15,
                secure: false,
                hasMask: true,
                typeMask: 'cel-phone',
                error: phone
            },
            {
                name: 'cnh',
                label: 'Cnh *',
                value: form.cnh,
                placeholder: 'cnh',
                CallBack: CallBack,
                keyboard: 'phone-pad',
                max: 11,
                secure: false,
                hasMask: false,
                error: cnh
            },
            {
                name: 'vehicle',
                label: 'Placa do veículo *',
                value: form.vehicle,
                placeholder: 'Placa do veículo',
                CallBack: CallBack,
                keyboard: 'default',
                max: 7,
                secure: false,
                hasMask: false,
                error: vehicle
            },
            {
                name: 'pass',
                label: 'Senha *',
                value: form.pass,
                placeholder: 'senha',
                CallBack: CallBack,
                keyboard: 'default',
                max: 20,
                secure: true,
                hasMask: false,
                error: password
            },
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
        <ScrollView style={{ backgroundColor: Colors.white }}>
            <View style={{ width: '100%', display: 'flex', alignItems: 'center', paddingTop: 50, paddingBottom: 30 }}>
                <SvgXml xml={Logo} />
                <Text
                    style={{
                        textAlign: "center",
                        fontFamily: "Poppins-Medium",
                        fontSize: 14,
                        color: Colors.lightGrey,
                        paddingLeft: 70,
                        paddingRight: 70,
                        paddingTop: 15
                    }}
                >
                    Juntos, por um mundo mais verde e sustentável
                </Text>
            </View>

            <SignUpForm formItems={checkUserType()} />
            <View style={{ width: "70%", alignSelf: "center", paddingBottom: 20 }}>
                <Button
                    action={() => SignUp()}
                    text="Cadastrar"
                    color={Colors.secondary}
                />
            </View>
            <View style={style.accountContainer}>
                <RegularText weight='Regular' color={Colors.textLight} fontSize={12} content={"Já possui uma conta?"} />
                <View style={{ padding: 2 }}></View>
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <RegularText weight='Medium' color={Colors.primary} fontSize={12} content={"Faça login"} />
                </Pressable>
            </View>
        </ScrollView>
    );
}
