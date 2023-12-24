import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainView from './Views/MainView'; // Pfad zu Ihrer Main-Komponente
import ImprintView from './Views/ImprintView';

import FooterView from './Views/FooterView';
import { MainHelmet } from './Helmet/MainHelmet';
import NotFoundView from './Views/NotFoundView';

function App() {
  return (
    <div>
      <MainHelmet/>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/impressum" element={<ImprintView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
      <FooterView/>
    </div>
  );
}

export default App;
