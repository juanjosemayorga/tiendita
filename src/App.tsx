import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { OffersPage } from './pages/OffersPage/OffersPage';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <OffersPage />
    </>
  );
}

export default App;
