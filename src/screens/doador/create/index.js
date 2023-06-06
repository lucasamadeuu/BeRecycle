import { useEffect, useState } from "react";
import SafeArea from "../../../components/safeArea";
import RegularText from "../../../components/texts";
import UserInfo from "../../../components/UserInfo";
import Colors from "../../../theme/colors";
import global from "../../../theme/global";
import { ScrollView, View } from "react-native";
import { getAxios } from "../../../context/Integration";
import CreateForm from "../../../components/createform";
import { hasDescription, hasName } from "../../../context/validForm";
import Button from "../../../components/button";

export default function CreateDonation({ route }) {
    const { userData } = route.params;
    const { type, cep, phone, email, name } = JSON.parse(userData);
    const [cepData, setCepData] = useState(null);
    const [form, setForm] = useState({});
    const [isSignUpClicked, setIsSignUpClicked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [description, setDescription] = useState('')

    const CallBack = (key, value) => {
        var clone = Object.assign({}, form);
        clone[key] = value;
        setForm(clone);
    };

    useEffect(() => {
        if (cepData) {
            const localValue = `${cepData.city}, ${cepData.state}`;
            CallBack('local', localValue);
        }
    }, [cepData]);

    useEffect(() => {
        getAxios(setCepData, `https://cdn.apicep.com/file/apicep/${cep}.json`);

        var clone = Object.assign({}, form);
        clone['email'] = email;
        clone['phone'] = phone;
        clone['name'] = name;
        setForm(clone);

        setLoading(true);
    }, []);

    useEffect(() => {
        if (isSignUpClicked) {
            if (hasDescription(form.description)) {
                setDescription('Preencha a descrição corretamente');
            } else {
                setDescription('');
            }
        }
    }, [isSignUpClicked, form.description]);

    const Donation = () => {
        setIsSignUpClicked(true)
        ValidateForm()
    }

    const Validate = () => {
        return form.description ? true : false
    }

    const ValidateForm = () => {
        (Validate())
            ? Request()
            : ''
    }

    const Request = () => {
        const donationJSON = JSON.stringify(form);
        // fazer post
    }

    useEffect(() => {
        if (Object.keys(form).length > 0) {
            setIsLoaded(true);
        }
    }, [form]);

    const formItems = [
        {
            name: 'description',
            label: 'Descrição *',
            value: form.description,
            placeholder: type == "Doador" ? 'descrição da doação' : 'descrição dos materiais',
            CallBack: CallBack,
            keyboard: 'default',
            max: 300,
            canChange: true,
            error: description
        },
        {
            name: 'local',
            label: 'Localidade *',
            value: form.local,
            placeholder: 'local',
            keyboard: 'default',
            max: 300,
            canChange: false,
            error: ''
        },
    ];

    const formItemsContact = [
        {
            name: 'phone',
            label: 'WhatsApp *',
            value: form.phone,
            placeholder: 'phone',
            keyboard: 'default',
            max: 300,
            canChange: false,
            error: ''
        },
        {
            name: 'email',
            label: 'E-mail *',
            value: form.email,
            placeholder: 'email',
            keyboard: 'default',
            max: 300,
            canChange: false,
            error: ''
        },
    ];


    return (
        <SafeArea>
            <ScrollView style={global.allPage}>
                <View style={{ paddingBottom: 100 }}>
                    <View>
                        <UserInfo userData={userData} />
                    </View>
                    <View>
                        <RegularText weight='Bold' color={Colors.darkGrey} fontSize={18} content={`Informações ${type == 'Doador' ? "da doação" : "dos materiais"}`} />
                    </View>
                    {isLoaded && <CreateForm formItems={formItems} contactItems={formItemsContact} />}
                    <Button
                        action={() => Donation()}
                        text="Cadastrar"
                        color={Colors.primary}
                    />
                </View>
            </ScrollView>
        </SafeArea>
    );
}
