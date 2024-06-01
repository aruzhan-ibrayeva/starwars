import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/characters">Characters</a></li>
                    <li><a href="/planets">Planets</a></li>
                    <li><a href="/starships">Starships</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
