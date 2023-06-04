import { Pressable, Text, View } from "react-native";
import Button from "../../components/button/index";
import SafeArea from "../../components/safeArea";
import Colors from "../../theme/colors";
import styles from "./style";
import { SvgXml } from "react-native-svg";
import LoginForm from "../../components/loginform";
import Svgs from "../../../assets/images/svgs";
import { useState } from "react";
import RegularText from "../../components/texts";

export default function Login({ navigation }) {
  const Logo = Svgs.xml;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //FINGINDO ESTAR TRAZENDO DO BANCO
  const users = [
    {
      username: "lucas",
      password: "12345",
      title: "student",
    },
    {
      username: "gabriel",
      password: "12345",
      title: "doador",
    },
  ];

  const VerifyUser = () => {
    const user = { username, password };

    const foundUser = users.find(
      (u) => u.username === user.username && u.password === user.password
    );

    if (foundUser) {
      const userJSON = JSON.stringify(foundUser);
      if (foundUser.title == "doador") {
        navigation.navigate("NavigationDoador", { userData: userJSON });
      } else if (foundUser.title == "beneficiario") {
        navigation.navigate("NavigationBeneficiario", { userData: userJSON });
      } else {
        //aqui para transportador
      }
    } else {
      console.log("Usuário ou senha incorretos.");
    }

  };

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  console.log(username)
  console.log(password)

  const formItems = [
    {
      label: "E-mail",
      placeholder: "Digite seu e-mail",
      value: "",
      handleUsernameChange: handleUsernameChange,
      username: username,
    },
    {
      label: "Senha",
      placeholder: "Digite sua senha",
      value: "",
      handlePasswordChange: handlePasswordChange,
      password: password,
    },
  ];

  return (
    <SafeArea>
      <View style={[styles.container, styles.mainContainer, styles.all]}>
        <View style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
          <SvgXml xml={Logo} />
          <View style={[styles.container, styles.formContainer]}>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Poppins-Medium",
                fontSize: 24,
                color: Colors.textDark,
                marginBottom: 20,
              }}
            >
              Login
            </Text>
            <LoginForm formItems={formItems} />
            <View style={{ width: "70%", alignSelf: "center" }}>
              <Button
                action={() => VerifyUser()}
                text="Entrar"
                color={Colors.primary}
              />
            </View>
          </View>
        </View>

        <View style={styles.accountContainer}>
          <RegularText weight='Regular' color={Colors.textLight} fontSize={12} content={"Não Possui conta?"} />
          <View style={{ padding: 2 }}></View>
          <Pressable onPress={() => navigation.navigate("Cadastrar")}>
            <RegularText weight='Medium' color={Colors.primary} fontSize={12} content={"Cadastrar-se"} />
          </Pressable>
        </View>
      </View>
    </SafeArea>
  );
}
