import { constants } from 'buffer';
import React from 'react';
import Lista from './Lista';
import Navbar from './Navbar';

const App = () => {
    return (
        <div className="uk-container">
            <Navbar></Navbar>
            <Lista></Lista>
        </div>
    )
};

export default App;
