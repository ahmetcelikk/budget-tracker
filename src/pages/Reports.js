import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Reports = ({ transactions }) => {
  const categories = ['Maaş', 'Kira', 'Market', 'Yeme İçme', 'Ulaşım', 'Eğlence', 'Sağlık', 'Diğer'];

  const categoryData = categories.map(category => {
    const incomeTransactions = transactions.filter(transaction => transaction.type === 'income' && transaction.category === category);
    const expenseTransactions = transactions.filter(transaction => transaction.type === 'expense' && transaction.category === category);

    const incomeAmount = incomeTransactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    const expenseAmount = expenseTransactions.reduce((acc, transaction) => acc + transaction.amount, 0);

    return {
      category,
      incomeAmount,
      expenseAmount
    };
  });

  const totalIncome = transactions
    .filter(transaction => transaction.type === 'income')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpense = transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const netTotal = totalIncome - totalExpense;

  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Gelir',
        data: categoryData.map(data => data.incomeAmount),
        backgroundColor: '#4caf50'
      },
      {
        label: 'Gider',
        data: categoryData.map(data => data.expenseAmount),
        backgroundColor: '#f44336'
      }
    ]
  };

  return (
    <div>
      <h2>Raporlar</h2>
      <Bar data={data} />
      <div className="net-total">
        <h3>Net Toplam Kar/Zarar</h3>
        <p>{netTotal >= 0 ? `Kar: ${netTotal} TL` : `Zarar: ${-netTotal} TL`}</p>
      </div>
    </div>
  );
};

export default Reports;
