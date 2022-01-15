import { Box, Pagination } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { getCharacters } from '../../api/characters';
import { Context } from '../../Context';
import { CharacterCard } from '../CharacterCard';

export const CharacterList: React.FC = () => {
  const { characters, setCharactersPage } = useContext(Context);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handlePageChange = (currentPage: number) => {
    setPage(currentPage);
  };

  useEffect(() => {
    (async function getData() {
      try {
        const allPages = await (await getCharacters(1)).info.pages;

        setTotalPages(allPages);
      } catch {
        setTotalPages(1);
      }
    }());
  }, []);

  useEffect(() => {
    setCharactersPage(page);
  }, [page]);

  return (
    <>
      <Box className="container" marginY="20px">
        <Box className="container_grid">
          {characters && characters.map((character) => (
            <CharacterCard character={character} key={character.id} />
          ))}
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" marginBottom="24px">
        <Pagination
          color="primary"
          count={totalPages}
          onChange={(event, ppage) => handlePageChange(ppage)}
        />
      </Box>
    </>
  );
};
