import { ScrollView, Text, View } from "react-native";
import SignUpForm from "../../components/signupform";
import { useEffect, useReducer, useState } from "react";
import Button from "../../components/button";
import Colors from "../../theme/colors";
import RegularText from "../../components/texts";
import { hasCnh, hasCnpj, hasEmail, hasEndereco, hasName, hasPassword, hasPhone, hasVehicle } from "../../context/validForm";

export default function SignUp({ navigation, route }) {
    const { userType } = route.params;
    const [form, setForm] = useState({})
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [address, setAddres] = useState('')
    const [cnh, setCnh] = useState('')
    const [vehicle, setVehicle] = useState('')

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
            if (!hasEndereco(form.address)) {
                setAddres('Preencha o endereço corretamente - ex: Rua Europa, SP - 13');
            } else {
                setAddres('');
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
    }, [isSignUpClicked, form.name, form.email, form.phone, form.pass, form.cnpj, form.address, form.cnh, form.vehicle]);

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
                label: 'nome',
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
                label: 'e-mail',
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
                name: 'address',
                label: 'endereço',
                value: form.address,
                placeholder: 'endereço',
                CallBack: CallBack,
                keyboard: 'default',
                max: 250,
                secure: false,
                hasMask: false,
                error: address

            },
            {
                name: 'phone',
                label: 'telefone',
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
                label: 'CNPJ',
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
                label: 'senha',
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
                label: 'nome completo',
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
                label: 'e-mail',
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
                name: 'address',
                label: 'endereço',
                value: form.address,
                placeholder: 'endereço',
                CallBack: CallBack,
                keyboard: 'default',
                max: 250,
                secure: false,
                hasMask: false,
                error: address

            },
            {
                name: 'phone',
                label: 'telefone',
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
                label: 'senha',
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
                label: 'nome completo',
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
                label: 'e-mail',
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
                name: 'address',
                label: 'endereço',
                value: form.address,
                placeholder: 'endereço',
                CallBack: CallBack,
                keyboard: 'default',
                max: 250,
                secure: false,
                hasMask: false,
                error: address

            },
            {
                name: 'phone',
                label: 'telefone',
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
                label: 'cnh',
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
                label: 'Placa do veículo',
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
                label: 'senha',
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
        <ScrollView>
            <SignUpForm formItems={checkUserType()} />
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
