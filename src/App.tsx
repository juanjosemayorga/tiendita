import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { OffersPage } from './pages/OffersPage/OffersPage';
import { PopularPage } from './pages/PopularPage/PopularPage';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <OffersPage />
      <PopularPage />
    </>
  );
}

export default App;
