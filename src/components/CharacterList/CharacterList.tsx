import React, { useContext } from 'react';
import { Context } from '../../Context';

export const CharacterList: React.FC = () => {
  const { characters, episodes, locations } = useContext(Context);

  return (
    <div className="container">
      <div className="characters">
        {characters && characters.map(character => (
          <div className="card" key={character.id}>
            <p>{character.name}</p>
            <p>{character.gender}</p>
            <p>{character.origin.name}</p>
          </div>
        ))}
      </div>

      <div className="episodes">
        {episodes && episodes.map(episode => (
          <div className="card" key={episode.id}>
            <p>{episode.name}</p>
            <p>{episode.air_date}</p>
            <p>{episode.url}</p>
          </div>
        ))}
      </div>

      <div className="episodes">
        {locations && locations.map(location => (
          <div className="card" key={location.id}>
            <p>{location.name}</p>
            <p>{location.type}</p>
            <p>{location.dimension}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
