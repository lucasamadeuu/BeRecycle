import { Pressable, Text, View } from "react-native";
import Button from "../../components/button/index";
import SafeArea from "../../components/safeArea";
import Colors from "../../theme/colors";
import styles from "./style";
import { SvgXml } from "react-native-svg";
import LoginForm from "../../components/loginform";
import Svgs from "../../../assets/images/svgs";
import { useEffect, useState } from "react";
import RegularText from "../../components/texts";
import { hasEmail, hasPassword } from "../../context/validForm";
import { GetUser } from "../../context/Integration";

export default function Login({ navigation }) {
  const Logo = Svgs.logo;
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [notFound, setNotFound] = useState("");
  const [isSignUpClicked, setIsSignUpClicked] = useState(false);
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (isSignUpClicked) {
      if (!hasEmail(email)) {
        setEmailError('Preencha o e-mail corretamente');
      } else {
        setEmailError('');
      }
      if (!hasPassword(password)) {
        setPasswordError('Preencha a senha corretamente - mínimo 6 caracteres');
      } else {
        setPasswordError('');
      }
      if (email != '' && password != '') {
        setNotFound('')
      }
    }
  }, [isSignUpClicked, email, password]);

  useEffect(() => {
    if (user != null) {

      if (user == '') {
        setNotFound("E-mail ou senha incorretos");
      } else {
        if (user.type == "Doador") {
          navigation.navigate("NavigationDoador", { userData: user });
        } else if (user.type == "Beneficiário") {
          navigation.navigate("NavigationBeneficiario", { userData: user });
        } else {
          navigation.navigate("NavigationTransportador", { userData: user });
        }
      }
    }
  }, [user]);

  const VerifyUser = async () => {
    setIsSignUpClicked(true)

    if (passwordError == '' && emailError == '') {
      const data = {
        email: email,
        pass: password
      };

      const userJSON = JSON.stringify(data);

      await GetUser(setUser, 'login', userJSON)
    }
  };

  const handleUsernameChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const formItems = [
    {
      label: "E-mail",
      placeholder: "Digite seu e-mail",
      value: "",
      handleUsernameChange: handleUsernameChange,
      username: email,
      error: emailError
    },
    {
      label: "Senha",
      placeholder: "Digite sua senha",
      value: "",
      handlePasswordChange: handlePasswordChange,
      password: password,
      error: passwordError
    },
  ];

  return (
    <SafeArea>
      <View style={[styles.container, styles.mainContainer, styles.all]}>
        <View style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
          <SvgXml xml={Logo} />
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Roboto-Medium",
              fontSize: 14,
              color: Colors.lightGrey,
              paddingLeft: 70,
              paddingRight: 70,
              paddingTop: 15
            }}
          >
            Juntos, por um mundo mais verde e sustentável
          </Text>
          <View style={[styles.container, styles.formContainer]}>
            <LoginForm formItems={formItems} />
            <View style={styles.messageNotFound}>
              {notFound != '' ? <RegularText weight='Regular' color={Colors.error} fontSize={8} content={notFound} /> : ''}
            </View>
            <View style={{ width: "100%", alignSelf: "center" }}>
              <Button
                action={() => VerifyUser()}
                text="Entrar"
                color={Colors.primary}
              />
            </View>
            <View style={{ padding: 7 }}></View>
            <View style={{ width: "100%", alignSelf: "center" }}>
              <Button
                action={() => navigation.navigate("Cadastrar")}
                text="Criar Conta"
                color={Colors.secondary}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeArea >
  );
}
