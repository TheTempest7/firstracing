import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Main from './conatiners/Main/Main';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes, } from 'react-router-dom';
import Namepage from './conatiners/Namepage/Namepage';
import Trial from './components/Trial';
import Scorelist from './conatiners/Scorelist/Scoreslist';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/game' element={<Namepage />} />
        <Route path='/game/app' element={<Trial />} />
        <Route path='/scores' element={<Scorelist />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



