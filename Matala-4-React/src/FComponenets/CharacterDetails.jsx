import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { characters } from '../assets/data.js';

const CharacterDetails = () => {
  const { id } = useParams();
  const character = characters.find((c) => c.id === Number(id));

  if (!character) {
    return <div className="page-content"><h3>Character not found</h3></div>;
  }

  const sideClassName = character.side === 'Dark' ? 'side-dark' : 'side-light';

  return (
    <div className="page-content">
      <div className="character-card">
        <h1>{character.name}</h1>
        <p><strong>Role:</strong> {character.role}</p>
        <p className={sideClassName}><strong>Side:</strong> {character.side}</p>

        <Link to="/characters" className="back-link">
          Back to List
        </Link>
      </div>
    </div>
  );
};

export default CharacterDetails;
