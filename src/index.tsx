import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Onboarding from './components/Onboarding';
import "./components/styles.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Onboarding></Onboarding>
  </React.StrictMode>
);