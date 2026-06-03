import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Aboutus } from './pages/aboutus';
import { Contactus } from './pages/contact-us';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import WhatsAppButton from './components/whatsAppButton';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact-us" element={<Contactus />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
