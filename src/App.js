import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Characters from './components/Characters/Characters';
import Planets from './components/Planets/Planets';
import Starships from './components/Starships/Starships';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/planets" element={<Planets />} />
                <Route path="/starships" element={<Starships />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
