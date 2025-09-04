import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={estilos.container}>
        <StatusBar style="auto" />
        <View style={estilos.viewLogo}>
          <Text>Dá Hora Filmes!</Text>
        </View>
        <View style={estilos.viewBotoes}>
          <Button color="red" title="Buscar Filmes" />
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
    backgroundColor: "lightblue",
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  viewLogo: {
    backgroundColor: "pink",
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  viewBotoes: {
    backgroundColor: "lightgreen",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  viewRodape: {
    backgroundColor: "lightyellow",
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
