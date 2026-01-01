import React from 'react';
import { Link } from 'react-router-dom';
import { characters } from '../assets/data.js';

const Characters = () => {
  return (
    <div className="page-content">
      <h2>Character List</h2>
      <ul className="character-list">
        {characters.map((char) => (
          <li key={char.id}>
            <Link to={`/characters/${char.id}`}>
              {char.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Characters;