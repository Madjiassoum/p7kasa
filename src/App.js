import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Accueil from './pages/home/Accueil';
import About from './pages/about/About';
import Housing from './pages/housing/Housing';
import NotFound from './pages/notFound/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/About" element={<About />} />
        <Route path="/Housing/:id" element={<Housing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
