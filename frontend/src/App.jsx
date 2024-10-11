import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
        <Routes>
          <Route exact path="/" element={
            <>
              <Home />
            </>
          } />
        </Routes>
    </>
  );
};

export default App;
