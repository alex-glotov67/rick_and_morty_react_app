import { BASE_URL } from './api';

export const getEpisodes = async (page: number):Promise<EpisodesFromApi> => {
  const response = await fetch(`${BASE_URL}/episode?page=${page}`);

  return response.json();
};
