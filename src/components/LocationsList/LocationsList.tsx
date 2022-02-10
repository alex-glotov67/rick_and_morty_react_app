import { Box, Pagination } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { getLocations } from '../../api/location';
import { Context } from '../../Context';
import { LocationCard } from '../LocationCard';

export const LocationsList: React.FC = () => {
  const { locations, setLocationsPage } = useContext(Context);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handlePageChange = (currentPage: number) => {
    setPage(currentPage);
  };

  useEffect(() => {
    (async function getData() {
      try {
        const allPages = await (await getLocations(1)).info.pages;

        setTotalPages(allPages);
      } catch {
        setTotalPages(1);
      }
    }());
  }, []);

  useEffect(() => {
    setLocationsPage(page);
  }, [page]);

  return (
    <>
      <Box className="container" marginY="20px">
        <Box className="container_grid">
          {locations && locations.map((location) => (
            <LocationCard location={location} key={location.id} />
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
