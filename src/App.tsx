import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/appRoutes'
import NavBar from './components/navBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
