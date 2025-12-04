import React from 'react' ;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SearchResults from './pages/SearchResults';
import { farmData, socialLinks } from './data/data';

export default function App() {
  const navItems = [
    { id: 1, path: "/", label: "Home" },
    { id: 2, path: "/about", label: "About" },
    { id: 3, path: "/contact", label: "Contact" }
  ];

  return (
    <Router>
      <div className="App">
        <Header 
          brandName={farmData.name}
          navItems={navItems}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={
            <About aboutInfo={farmData.about} />
          } />
          <Route path="/contact" element={
            <Contact contactInfo={farmData.contact} />
          } />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
        <Footer 
          companyName={farmData.name}
          socialLinks={socialLinks}
        />
      </div>
    </Router>
  );
}