/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { getCharacter } from '../../api/characters';

interface Props {
  character: Character;
}

export const CharacterInfo: React.FC<Props> = () => {
  const [character, setCharacter] = useState<Character | null>(null);

  const { characterId } = useParams<{characterId: string}>() || '';

  useEffect(() => {
    (async function getData() {
      const newCharacter = await getCharacter(characterId);

      setCharacter(await newCharacter);
    }());
  }, [characterId]);

  console.log(character);

  return (
    <div className="container card_info">
      <img
        src={character?.image}
        className="card-img-top"
        alt={character?.name}
        style={{
          width: '18rem',
          height: '20rem',
          marginRight: '15px',
        }}
      />
      <div className="me-4">
        <div className="card-body">
          <h5 className="card-title text-center">
            {character?.name}
          </h5>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {`Gender: ${character?.gender}`}
          </li>
          <li className="list-group-item">
            {`Species: ${character?.species}`}
          </li>
          <li className="list-group-item">
            {`Origin: ${character?.origin.name}`}
          </li>
          <li className="list-group-item">
            {`Location: ${character?.location?.name}`}
          </li>
          <li className="list-group-item">
            {`Status: ${character?.status}`}
          </li>
        </ul>

        <div className="card-body">
          <NavLink
            to="/characters"
            className="btn btn-danger"
          >
            Close
          </NavLink>
        </div>
      </div>

      <div className="p-3">
        <h5 className="title text-center">{'Episodes: '}</h5>
        <div className="">
          {character?.episode?.map(e => (
            <p key={e}>
              {`Episode ${e.split('/').slice(-1)}`}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
