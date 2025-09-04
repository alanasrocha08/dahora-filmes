import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// Importando a biblioteca interna vextor-icons
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  /* Usamos o useFonts para criar uma refe^rncia para a fonte que queremos utilizar no app. */
  const [fonteCarregar] = useFonts({
    Monoton: require("./assets/fonts/Monoton-Regular.ttf"),
  });

  // Se a fonte ainda não foi carregada
  if (!fonteCarregar) {
    return (
      <Text style={{ color: "red", fontSize: 22 }}> Carregando fontr...</Text>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={estilos.container}>
        <StatusBar style="auto" />
        <View style={estilos.viewLogo}>
          <Image source={require("./assets/dahora.png")} style={estilos.logo} />
          <Text style={estilos.tituloApp}>Dá Hora Filmes!</Text>
        </View>
        <View style={estilos.viewBotoes}>
          <Pressable style={estilos.botaoInicial}>
            <Ionicons name="search" size={24} color="white" />
            <Text style={estilos.textoBotao}>Buscar Filmes</Text>
          </Pressable>

          <Button title="Favoritos" />
        </View>
        <View style={estilos.viewRodape}>
          <Button title="Privacidade" />
          <Button title="Sobre" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

/* Estilos */
const estilos = StyleSheet.create({
  container: {
    backgroundColor: "fff",
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  viewLogo: {
    backgroundColor: "pink",
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 128,
    height: 128,
  },
  tituloApp: {
    fontSize: 32,
    color: "#5451a6",
    fontFamily: "Monoton",
  },
  viewBotoes: {
    backgroundColor: "lightgreen",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  botaoInicial: {
    backgroundColor: "#5451a6",
    padding: 16,
    borderRadius: 8,
    flexDirection: "row",
  },
  textoBotao: {
    color: "white",
  },
  viewRodape: {
    backgroundColor: "lightyellow",
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
