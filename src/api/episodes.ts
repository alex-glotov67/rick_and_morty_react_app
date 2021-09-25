import { BASE_URL } from './api';

export const getEpisodes = async ():Promise<EpisodesFromApi> => {
  const response = await fetch(`${BASE_URL}/episode`);

  return response.json();
};
