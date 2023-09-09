//import react and react dom, and the other files needed to render the app
import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDom.createRoot(document.getElementById('root'));

//render the main root of the application which carries all other components
root.render(<App />);
