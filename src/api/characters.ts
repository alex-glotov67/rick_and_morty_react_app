import { BASE_URL } from './api';

export const getCharacters = async ():Promise<CharactersFromApi> => {
  const response = await fetch(`${BASE_URL}/character?page=1`);

  return response.json();
};
