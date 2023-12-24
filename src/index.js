import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import "./i18n_client"

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/HeroComponent.css';
import './assets/css/EmploymentHistory.css';
import "./assets/css/SkillsComponent.css";

const rootElement = document.getElementById('root')

hydrateRoot(
  rootElement,
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
