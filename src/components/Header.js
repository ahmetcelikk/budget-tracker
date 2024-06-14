// ./components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Bütçe Takip Uygulaması</h1>
      <nav>
        <Link to="/" className="nav-link">Ana Sayfa</Link>
        <Link to="/reports" className="nav-link">Raporlar</Link>
        <Link to="/exchange-rates" className="nav-link">Para Birimi Dönüştür</Link>
      </nav>
    </header>
  );
};

export default Header;
