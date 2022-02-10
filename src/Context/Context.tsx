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
  setLocationsPage: Dispatch<SetStateAction<number>>;
  setEpisodesPage: Dispatch<SetStateAction<number>>;
}

export const Context = createContext<ContextValue>({
  characters: [],
  episodes: [],
  locations: [],
  setCharactersPage: () => {},
  setLocationsPage: () => {},
  setEpisodesPage: () => {},
});

export const ContextProvider: React.FC = ({ children }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [charactersPage, setCharactersPage] = useState<number>(1);
  const [locationsPage, setLocationsPage] = useState<number>(1);
  const [episodesPage, setEpisodesPage] = useState<number>(1);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    (async function getData() {
      try {
        const responseCharacters = (await getCharacters(charactersPage)).results;

        setCharacters(await responseCharacters);
      } catch {
        setCharacters([]);
      }
    }());
  }, [charactersPage]);

  useEffect(() => {
    (async function getData() {
      try {
        const responseEpisodes = (await getEpisodes(episodesPage)).results;

        setEpisodes(await responseEpisodes);
      } catch {
        setEpisodes([]);
      }
    }());
  }, [episodesPage]);

  useEffect(() => {
    (async function getData() {
      try {
        const responseLocations = (await getLocations(locationsPage)).results;

        setLocations(await responseLocations);
      } catch {
        setLocations([]);
      }
    }());
  }, [locationsPage]);

  const contextValue: ContextValue = {
    characters,
    episodes,
    locations,
    setCharactersPage,
    setLocationsPage,
    setEpisodesPage,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};
