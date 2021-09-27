import React from 'react';

interface Props {
  location: Location;
}

export const LocationCard: React.FC<Props> = ({ location }) => {
  return (
    <div className="card">
      <p>{location.name}</p>
      <p>{location.type}</p>
      <p>{location.dimension}</p>
    </div>
  );
};
