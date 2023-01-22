import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Appli from './code/structure/Appli.jsx';


const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);

// ReactDOM.render
root.render(
  <React.StrictMode>
    <Appli />
  </React.StrictMode>
);