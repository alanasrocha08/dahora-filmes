# Dá Hora Filmes

Aplicativo desenvolvido utilizando React Native com Expo.

## 01_estrutura-e-estilização-basica

- Remoção das imagens originais na pasta assets
- Adiçãp de imagens específicas para o aplicativo
- Configuração dos detalhes do aplicativo em `app.json`
- Instalção da dependência (lib) `resct-native-safe-area-context`

Use o comando: `npx expo install react-native-safe-area-context`

_Utilizamos o `expo install` para garantir a instalação de dependências (ou libs) que sejam compativeis com a versão de SDK di Expo usada en seu projeto._

- Refatoramos a estrutura e estilização do `App.tsx` usando os componentes:
  `SafeAreaProvider`, `SafeAreaView`, `StatusBar` (do expo), `View`, `Text` e `Button`

- Uso do flex para determinar o tamanho das views.
