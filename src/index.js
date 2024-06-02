import React from 'react';
import ReactDOM from 'react-dom/client';
import { Reset } from 'styled-reset';
import MainPageBefore from './pages/MainPage';
import Globalfonts from './Globalfonts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<><Reset/><Globalfonts/><MainPageBefore/></>);