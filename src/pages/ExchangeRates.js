import React, { useState, useEffect } from 'react';
// CSS dosyasını ekledik

const ExchangeRates = () => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        setExchangeRates(data.rates);
      } catch (error) {
        setError('Failed to fetch exchange rates');
      }
    };

    fetchExchangeRates();
  }, []);

  const convertCurrency = () => {
    if (!fromCurrency || !toCurrency) {
      setError('Please select both from and to currencies');
      return;
    }

    if (fromCurrency === toCurrency) {
      setConvertedAmount(amount);
      return;
    }

    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];

    if (!fromRate || !toRate) {
      setError('Exchange rate not available');
      return;
    }

    const result = (amount / fromRate) * toRate;
    setConvertedAmount(result.toFixed(4));
    setError(null);
  };

  return (
    <div className="currency-converter">
      <h2>Para Birimi Dönüştürücü</h2>
      <div className="input-container">
        <div className="input-section">
          <label>From:</label>
          <select className="currency-select" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
            <option value="">Para Birimi Seçiniz</option>
            {Object.keys(exchangeRates).map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
          <input type="number" className="amount-input" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className="input-section-to">
          <label>To:</label>
          <select className="currency-select" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
            <option value="">Para Birimi Seçiniz</option>
            {Object.keys(exchangeRates).map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
      </div>
      <button className="convert-button" onClick={convertCurrency}>Dönüştür</button>
      {error && <p className="error-message">{error}</p>}
      {convertedAmount !== null && (
        <p className="conversion-result">{amount} {fromCurrency} = {convertedAmount} {toCurrency}</p>
      )}
    </div>
  );
  
};

export default ExchangeRates;
