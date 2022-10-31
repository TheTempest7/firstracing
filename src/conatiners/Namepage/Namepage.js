import React from 'react';
import { useState } from 'react';
import { Route, Routes, Link, Router } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './Namepage.scss'


import App from '../App/App';
import { createBrowserHistory } from "history";
let history = createBrowserHistory();



function Namepage() {
    const [value, setValue] = useState();

    const handler = (e) => {
        setValue(e.target.value);
    }
    const validation = (e) => {
        if (!value) {
            e.preventDefault();
        }
    }
    return (
        <div className='Namepage'>
            <div className='Namepage__main'>
                <h1 className='Namepage__caption'>Write your user name !</h1>
                <input className='Namepage__input' onChange={handler} type="text" placeholder='how i can name you?' />
                <div className='Namepage__next'>
                    <Link to={'/game/app'} state={{ from: value }} onClick={validation}> click me to accept and start the game </Link>
                </div>
            </div>
            <div className='Namepage__back'>
                <Link to='/'>back</Link>
            </div>
        </div>
    )
}

export default Namepage;
