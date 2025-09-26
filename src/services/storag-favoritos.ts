import AsyncStorage from "@react-native-async-storage/async-storage";
import { Filme } from "../types";

// Criando uma identificação para a área de favoritos no dispositivo
const STORAGE_FAVORITOS = "filmes_favoritos";

/*
 *Lê de lista de favoritos
 * Retorna  um array vazio em caso de erro ou chave inexistente
 */
async function carregar(): Promise<Filme[]> {
  try {
    const favoritosArmazenados = await AsyncStorage.getItem(STORAGE_FAVORITOS);
    return favoritosArmazenados ? JSON.parse(favoritosArmazenados) : [];
  } catch (error) {
    console.log("Erro ao ler storage:" + error);
    return [];
  }
}

/*
 * Grava a lista de favoritos no Async Storange
 */
async function salvarLista(lista: Filme[]): Promise<void> {
  try {
    // Salva a lista de filmes no storange em formato de string
    await AsyncStorage.setItem(STORAGE_FAVORITOS, JSON.stringify(lista));
  } catch (error) {
    console.log("Erro ao salvar a lista no storage: " + error);
  }
}

/*
 * Salvar um filme na lista de favoritos (e no próprio storage)
 * Retorna true se salvou com sucesso, false se o filme já estava nos favoritos
 */
async function salvarFilmeFavorito(filme: Filme): Promise<Boolean> {
  const favoritos = await carregar();

  /* Verifica se um filme já existr com o mesmo id na lista/storage de faboritos. A função some() retorna true se encontrar pelo menos 1 item que satisfaça a condiçãp. */
  if (favoritos.some((filmeExitente) => filmeExitente.id === filme.id)) {
    // Já existe? Não precisamos salvar de novo
    // Por isso, retornamos false para indicar que o filme NÃO FOI adicionado
    return false;
  }

  // Se chegou até aqui, é porque esse filme ainda não timha sido salvo.
  // Portanto, adicionamos à lista de favoritos
  favoritos.push(filme);

  // Salva a lista atualizada no storage
  await salvarLista(favoritos);

  // Retorna true sinalizando que o filme fooi salvo
  return true;
}
