import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Onboarding from './components/Onboarding';
import "./components/styles.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Prepare from './components/Prepare';
import Splash from './components/Splash';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Onboarding = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 3000));
  return import('./components/Onboarding');
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<Splash />}>
              <Onboarding />
            </Suspense>
          } />
        <Route path='/prepare' element={<Prepare/>}>
          </Route>  
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);