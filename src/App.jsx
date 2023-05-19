import React from 'react';
import Expense from './components/Expenses/Expense';

function App() {
  const expenses = [
    {
      title: "American Spirits",
      amount: 250.50,
      date: new Date(2023, 5, 17)
    },
    {
      title: "Espresso",
      amount: 200.00,
      date: new Date(2023, 5, 17)
    },
    {
      title: "Cheese",
      amount: 5000.00,
      date: new Date(2023, 5, 17)
    },
    {
      title: "Gas",
      amount: 50.00,
      date: new Date(2023, 5, 17)
    },
    {
      title: "Books",
      amount: 30.30,
      date: new Date(2023, 5, 17)
    },
  ];
  return (
    <>
      <Expense 
        expense = {expenses}
      />

    </>
  );
}
export default App
