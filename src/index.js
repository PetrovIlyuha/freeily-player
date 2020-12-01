import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PlayerProvider } from './PlayerContext';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <PlayerProvider>
      <App />
    </PlayerProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
