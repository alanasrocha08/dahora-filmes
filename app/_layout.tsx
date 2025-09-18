import { useFonts } from "expo-font";
import { View, Text, StatusBar } from "react-native";
import Loading from "../src/components/Loading";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Stack } from "expo-router";

export default function Layout() {
  const [fonteCarregada] = useFonts({
    Monoton: require("../assets/fonts/Monoton-Regular.ttf"),
  });
  if (!fonteCarregada) {
    return <Loading />;
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="default" backgroundColor="#5451a6" />

      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#5451a6",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </SafeAreaProvider>
  );
  return (
    <View>
      <Text>_layout</Text>
    </View>
  );
}
