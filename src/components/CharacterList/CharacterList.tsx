import React, { useContext, useEffect, useState } from 'react';
import { getCharacters } from '../../api/characters';
import { Context } from '../../Context';
import { CharacterCard } from '../CharacterCard';

export const CharacterList: React.FC = () => {
  const { characters, setCharactersPage } = useContext(Context);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number[]>([]);

  const handlePageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPage(+event.target.value);
  };

  useEffect(() => {
    (async function getData() {
      try {
        const allPages = await (await getCharacters(1)).info.pages;
        const tempPages: number[] = [];

        for (let i = 1; i <= allPages; i += 1) {
          tempPages.push(i);
        }

        setTotalPages(tempPages);
      } catch {
        setTotalPages([]);
      }
    }());
  }, []);

  useEffect(() => {
    setCharactersPage(page);
  }, [page]);

  return (
    <>
      <label htmlFor="characters_page">
        {'Characters page: '}
        <select
          name="characters_page"
          id="characters_page"
          onChange={(event) => handlePageChange(event)}
        >
          {totalPages.map(p => (
            <option key={p}>
              {p}
            </option>
          ))}
        </select>
      </label>
      <div className="container">
        <div className="container_grid">
          {characters && characters.map((character) => (
            <CharacterCard character={character} key={character.id} />
          ))}
        </div>
      </div>
    </>
  );
};
