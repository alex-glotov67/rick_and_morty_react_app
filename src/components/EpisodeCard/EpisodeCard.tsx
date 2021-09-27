import React from 'react';

interface Props {
  episode: Episode;
}

export const EpisodeCard: React.FC<Props> = ({ episode }) => {
  return (
    <div className="card">
      <p>{episode.name}</p>
      <p>{episode.air_date}</p>
      <p>{episode.url}</p>
    </div>
  );
};
