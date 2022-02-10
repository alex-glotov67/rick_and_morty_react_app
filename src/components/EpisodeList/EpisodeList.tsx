import { Box, Pagination } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { getEpisodes } from '../../api/episodes';
import { Context } from '../../Context';
import { EpisodeCard } from '../EpisodeCard';

export const EpisodesList: React.FC = () => {
  const { episodes, setEpisodesPage } = useContext(Context);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handlePageChange = (currentPage: number) => {
    setPage(currentPage);
  };

  useEffect(() => {
    (async function getData() {
      try {
        const allPages = await (await getEpisodes(1)).info.pages;

        setTotalPages(allPages);
      } catch {
        setTotalPages(1);
      }
    }());
  }, []);

  useEffect(() => {
    setEpisodesPage(page);
  }, [page]);

  return (
    <>
      <Box className="container" marginY="20px">
        <Box className="container_grid">
          {episodes && episodes.map((episode) => (
            <EpisodeCard episode={episode} key={episode.id} />
          ))}
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" marginBottom="24px">
        <Pagination
          color="primary"
          count={totalPages}
          onChange={(event, pageCount) => handlePageChange(pageCount)}
        />
      </Box>
    </>
  );
};
