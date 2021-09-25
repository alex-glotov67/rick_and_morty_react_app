import { BASE_URL } from './api';

export const getLocations = async ():Promise<LocationsFromApi> => {
  const response = await fetch(`${BASE_URL}/location`);

  return response.json();
};
