import React, { useState } from 'react';
import TransactionList from '../components/TransactionList';

const Home = ({ transactions, addTransaction }) => {
  const [type, setType] = useState('income');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const categories = ['Maaş', 'Kira', 'Market', 'Yeme İçme', 'Ulaşım', 'Eğlence', 'Sağlık', 'Diğer'];

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ description, type, amount: parseFloat(amount), category });
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <div>
      <h2>Ana Sayfa</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Açıklama:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <label>
          Tür:
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="income">Gelir</option>
            <option value="expense">Gider</option>
          </select>
        </label>
        <label>
          Miktar:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </label>
        <label>
          Kategori:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Kategori Seçin</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </label>
        <button type="submit">Ekle</button>
      </form>
      <h3>İşlemler</h3>
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default Home;
