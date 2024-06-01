import React, { useState, useEffect } from 'react';
import './Planets.css';
import explorePlanetsIcon from './planets_icon.jpg';

function Planets() {
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://swapi.dev/api/planets/')
            .then(response => response.json())
            .then(data => {
                setPlanets(data.results);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                setError('Failed to fetch planets');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="planets-container">
            <div className="explore-planets-header">
                <img src={explorePlanetsIcon} alt="Explore Planets" className="explore-planets-icon" />
            </div>
            {planets.map(planet => (
                <div key={planet.name} className="planet">
                    <h3>{planet.name}</h3>
                    <p>Climate: {planet.climate}</p>
                    <p>Terrain: {planet.terrain}</p>
                    <p>Population: {planet.population}</p>
                </div>
            ))}
        </div>
    );
}

export default Planets;
