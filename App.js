import * as React from "react";
import * as Font from "expo-font";
import Router from "./src/routes/routes";

export default function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);

  React.useEffect(() => {
    Font.loadAsync({
      "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
      "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
      "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
      "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
      "fontello": require("./assets/fonts/fontello.ttf"),
    }).then(() => {
      setFontLoaded(true);
    });
  }, []);

  if (!fontLoaded) return null;

  return <Router />;
}
