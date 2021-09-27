import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  character: Character;
}

export const CharacterCard: React.FC<Props> = ({ character }) => {
  return (
    <div className="card">
      <img src={character.image} className="card-img-top" alt={character.name} />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">{character.gender}</p>
        <p className="card-text">{character.species}</p>
      </div>

      <div className="card-body">
        <NavLink
          className="btn btn-primary"
          to={`/characters/${character.id}`}
        >
          More info
        </NavLink>
      </div>
    </div>
  );
};
