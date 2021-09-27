import React from 'react';
import { LocationCard } from '../LocationCard';

interface Props {
  locations: Location[];
}

export const LocationsList: React.FC<Props> = (props) => {
  const { locations } = props;

  return (
    <div className="container">
      <div className="">
        {locations && locations.map((location) => (
          <LocationCard location={location} key={location.id} />
        ))}
      </div>
    </div>
  );
};
