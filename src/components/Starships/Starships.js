import React, { useState, useEffect } from 'react';
import './Starships.css';

function Starships() {
    const [starships, setStarships] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://swapi.dev/api/starships/')
            .then(response => response.json())
            .then(data => {
                setStarships(data.results);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                setError('Failed to fetch starships');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading starships...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="starships-container">
            {starships.map(starship => (
                <div key={starship.name} className="starship">
                    <h3>{starship.name}</h3>
                    <p>Model: {starship.model}</p>
                    <p>Manufacturer: {starship.manufacturer}</p>
                    <p>Cost in credits: {starship.cost_in_credits}</p>
                    <p>Length: {starship.length}</p>
                    <p>Max atmosphering speed: {starship.max_atmosphering_speed}</p>
                    <p>Crew: {starship.crew}</p>
                    <p>Passengers: {starship.passengers}</p>
                    <p>Cargo capacity: {starship.cargo_capacity}</p>
                </div>
            ))}
        </div>
    );
}

export default Starships;
