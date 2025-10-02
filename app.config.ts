// Módulo responsável pelo acesso à dados de variáveis de ambiente
import "dotenv/config";

import { ExpoConfig, ConfigContext } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "DáHora Filme",
  slug: "dahora-filme",
  owner: "alanasrocha", // Necessário para o esa
  scheme: "dahora",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icone.png",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  splash: {
    image: "./assets/splash-dahora.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  platforms: ["ios", "android"],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/icone.png",
      backgroundColor: "#000000",
    },
    edgeToEdgeEnabled: true,
  },
  plugins: ["expo-font", "expo-router"],
  // Acessando a API_KEY através do dotenv e guardando na chave apiKey
  extra: {
    apiKey: process.env.API_KEY,
    eas: {
      projectId: "73ae2ee7-3956-4d1f-a5ef-467ae152c38d",
    },
  },
});
