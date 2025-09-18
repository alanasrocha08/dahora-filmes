import { Stack } from "expo-router";
import { View, Text } from "react-native";

export default function privacidade() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Política de Privacidade",
        }}
      />
    </>
  );
}
