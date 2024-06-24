import React from "react";

export const Cards = ({ characters }) => {
  return (
    <div className="cards">
      {characters.map((character) => (
        <div key={character.id} className="card">
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
          <p>{character.gender}</p>
        </div>
      ))}
    </div>
  );
};
