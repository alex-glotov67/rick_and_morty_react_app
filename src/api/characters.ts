import { BASE_URL } from './api';

export const getCharacters = async (page: number):Promise<CharactersFromApi> => {
  const response = await fetch(`${BASE_URL}/character?page=${page}`);

  return response.json();
};

export const getCharacter = async (characterId: string):Promise<Character> => {
  const response = await fetch(`${BASE_URL}/character/${characterId}`);

  return response.json();
};
