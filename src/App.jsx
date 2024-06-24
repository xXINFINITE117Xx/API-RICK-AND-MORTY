import React, { useState } from "react";
import "./App.css";
import { Cards } from "./Components/Cards/Cards";
const URL = "https://rickandmortyapi.com/api/character";
import rick from "./assets/Rick.jpeg";

function App() {
  const [characters, setCharacters] = useState([]);

  const handleGetApi = async () => {
    try {
      const response = await fetch(`${URL}?page=1`);
      const data = await response.json();
      const selectedCharacters = data.results.slice(0, 20); 
      setCharacters(selectedCharacters);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="app">
      <Cards characters={characters} />
      <button onClick={handleGetApi} className="button-generating">
        Generar Personajes
      </button>
    </div>
  );
}

export default App;
