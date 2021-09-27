import React from 'react';
import { EpisodeCard } from '../EpisodeCard';

interface Props {
  episodes: Episode[];
}

export const EpisodesList: React.FC<Props> = (props) => {
  const { episodes } = props;

  return (
    <div className="container">
      <div className="">
        {episodes && episodes.map((episode) => (
          <EpisodeCard episode={episode} key={episode.id} />
        ))}
      </div>
    </div>
  );
};
