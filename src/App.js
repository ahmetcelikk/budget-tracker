// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Reports from './pages/Reports';
import ExchangeRates from './pages/ExchangeRates'; // Import ExchangeRates component
import './styles/styles.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home transactions={transactions} addTransaction={addTransaction} />} />
          <Route path="/reports" element={<Reports transactions={transactions} />} />
          <Route path="/exchange-rates" element={<ExchangeRates />} /> {/* Add route for ExchangeRates */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
