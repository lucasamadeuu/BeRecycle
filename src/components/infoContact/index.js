import React from "react";
import { Text, View, Linking } from "react-native";
import RegularText from "../texts";
import Colors from "../../theme/colors";
import Button from "../button";
import style from "./style";
import PhoneNumber from "libphonenumber-js";

export default function InfoContact({ type, donorContactInfo }) {

    console.log("asfsdfksmçdl", donorContactInfo[0].email)

    const phoneNumber = donorContactInfo[0].phone;
    const parsedPhoneNumber = PhoneNumber.parsePhoneNumberFromString(phoneNumber, "BR");

    const handleWhatsApp = () => {
        if (parsedPhoneNumber && parsedPhoneNumber.isValid()) {
            const formattedPhoneNumber = parsedPhoneNumber.format("E.164");

            Linking.canOpenURL("whatsapp://send").then((supported) => {
                if (supported) {
                    Linking.openURL(`whatsapp://send?phone=${formattedPhoneNumber}`);
                } else {
                    console.log("O aplicativo WhatsApp não está instalado");
                }
            });
        } else {
            console.log("Número de telefone inválido");
        }
    };

    const handleEmail = () => {
        Linking.openURL(`mailto:${donorContactInfo[0].email}`);
    };

    return (
        <View>
            <RegularText
                weight="Bold"
                color={Colors.darkGrey}
                fontSize={18}
                content={"Informações de contato"}
            />
            <RegularText
                weight="Regular"
                color={Colors.textLight}
                fontSize={12}
                content={`Entre em contato com o ${type}:`}
            />

            <View style={style.buttonContainer}>
                <Button action={handleWhatsApp} text="WhatsApp" color={Colors.primary} />
                <Button action={handleEmail} text="E-mail" color={Colors.secondary} />
            </View>
        </View>
    );
}
