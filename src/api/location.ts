import { BASE_URL } from './api';

export const getLocations = async (page: number):Promise<LocationsFromApi> => {
  const response = await fetch(`${BASE_URL}/location?page=${page}`);

  return response.json();
};
