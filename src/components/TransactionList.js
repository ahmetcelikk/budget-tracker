import React from 'react';

const TransactionList = ({ transactions }) => (
  <ul>
    {transactions.map((transaction, index) => (
      <li key={index}>
        {transaction.description}: {transaction.amount} TL - Kategori: {transaction.category}
      </li>
    ))}
  </ul>
);

export default TransactionList;
