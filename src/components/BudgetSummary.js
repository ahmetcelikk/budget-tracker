import React from 'react';

const BudgetSummary = ({ transactions }) => {
  const totalIncome = transactions
    .filter(transaction => transaction.type === 'income')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpense = transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const balance = totalIncome - totalExpense;

  const categorySummary = transactions.reduce((acc, transaction) => {
    if (!acc[transaction.category]) {
      acc[transaction.category] = { income: 0, expense: 0 };
    }
    if (transaction.type === 'income') {
      acc[transaction.category].income += transaction.amount;
    } else {
      acc[transaction.category].expense += transaction.amount;
    }
    return acc;
  }, {});

  return (
    <div>
      <h2>Bütçe Özeti</h2>
      <p>Toplam Gelir: {totalIncome}</p>
      <p>Toplam Gider: {totalExpense}</p>
      <p>Bakiye: {balance}</p>
      <h3>Kategori Bazında Özet</h3>
      <ul>
        {Object.entries(categorySummary).map(([category, amounts], index) => (
          <li key={index}>
            {category}:
            <ul>
              <li>Gelir: {amounts.income}</li>
              <li>Gider: {amounts.expense}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetSummary;
