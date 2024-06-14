import React, { useState } from 'react';

const TransactionForm = ({ addTransaction, categories }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ description, amount: parseFloat(amount), type, category });
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Açıklama:</label>
        <input 
          type="text" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required 
        />
      </div>
      <div>
        <label>Tutar:</label>
        <input 
          type="number" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required 
        />
      </div>
      <div>
        <label>Tür:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Gelir</option>
          <option value="expense">Gider</option>
        </select>
      </div>
      <div>
        <label>Kategori:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Kategori Seçin</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <button type="submit">Ekle</button>
    </form>
  );
};

export default TransactionForm;
