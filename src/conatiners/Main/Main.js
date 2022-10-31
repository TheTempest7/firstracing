import React from 'react';
import { useState } from 'react';
import { Route, Routes, Link, Router } from 'react-router-dom';
import App from '../App/App';
import './Main.scss';



function Main() {
    return (
        <div className='main'>
            <h1 className='main__caption'>Forza Yegorazion</h1>
            <div className='main__child'><Link to='/game'>Start Game</Link></div>
            <div className='main__child'><Link to='/scores'>Look at your Scores</Link></div>
        </div>
    )
}

export default Main;
