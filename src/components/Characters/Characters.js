import React, { useState, useEffect } from 'react';
import './Characters.css';

function Characters() {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results);
                setLoading(false);
            })
            .catch(err => {
                setError('Failed to fetch characters');
                setLoading(false);
            });
    }, []);

    const handleCharacterSelect = (character) => {
        setSelectedCharacter(character);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredCharacters = characters.filter(character =>
        character.name.toLowerCase().includes(searchTerm)
    );

    if (loading) return <p>Loading characters...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="characters-container">
            <input
                type="text"
                placeholder="Search character by name..."
                value={searchTerm}
                onChange={handleSearchChange}
                style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
            />
            {filteredCharacters.map((character, index) => (
                <div key={index} className="character-card" onClick={() => handleCharacterSelect(character)}>
                    <h3>{character.name}</h3>
                    <p><strong>Homeworld:</strong> <a href={character.homeworld}>Link</a></p>
                    <p><strong>Starships:</strong>
                        {character.starships.map((starship, idx) => (
                            <a key={idx} href={starship}>Starship {idx + 1} </a>
                        ))}
                    </p>
                </div>
            ))}
            {selectedCharacter && (
                <div className="sidebar" onClick={() => setSelectedCharacter(null)}>
                    <h3>{selectedCharacter.name}</h3>
                    <p><strong>Birth Year:</strong> {selectedCharacter.birth_year}</p>
                    <p><strong>Eye Color:</strong> {selectedCharacter.eye_color}</p>
                    <p><strong>Gender:</strong> {selectedCharacter.gender}</p>
                    <p><strong>Hair Color:</strong> {selectedCharacter.hair_color}</p>
                    <p><strong>Height:</strong> {selectedCharacter.height} cm</p>
                    <p><strong>Mass:</strong> {selectedCharacter.mass} kg</p>
                    <p><strong>Skin Color:</strong> {selectedCharacter.skin_color}</p>
                    <button onClick={() => setSelectedCharacter(null)}>Close</button>
                </div>
            )}
        </div>
    );
}

export default Characters;
