import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Aboutus } from './pages/aboutus';
import { Contactus } from './pages/contact-us';
import { Members } from './pages/members';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import WhatsAppButton from './components/whatsAppButton';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/members" element={<Members />} />
        <Route path="/contact-us" element={<Contactus />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </HashRouter>
  );
}

export default App;
