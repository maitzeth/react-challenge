import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'rc-slider/assets/index.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className="bg-primary min-h-screen flex items-center justify-center">
      <App />
    </main>
  </React.StrictMode>,
)
