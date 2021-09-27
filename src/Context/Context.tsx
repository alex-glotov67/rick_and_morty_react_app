// eslint-disable-next-line object-curly-newline
import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { getCharacters } from '../api/characters';
import { getEpisodes } from '../api/episodes';
import { getLocations } from '../api/location';

interface ContextValue {
  characters: Character[];
  episodes: Episode[];
  locations: Location[];
  setCharactersPage: Dispatch<SetStateAction<number>>;
}

export const Context = createContext<ContextValue>({
  characters: [],
  episodes: [],
  locations: [],
  setCharactersPage: () => {},
});

export const ContextProvider: React.FC = ({ children }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [charactersPage, setCharactersPage] = useState<number>(1);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    (async function getData() {
      try {
        const responseCharacters = (await getCharacters(charactersPage)).results;
        const responseEpisodes = (await getEpisodes()).results;
        const responseLocations = (await getLocations()).results;

        setCharacters(await responseCharacters);
        setEpisodes(await responseEpisodes);
        setLocations(await responseLocations);
      } catch {
        setCharacters([]);
        setEpisodes([]);
        setLocations([]);
      }
    }());
  }, [charactersPage]);

  const contextValue: ContextValue = {
    characters,
    episodes,
    locations,
    setCharactersPage,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};
