import React, { useState } from 'react';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense.jsx';

function App() {

  const DUMMY_EXPENSES = [
    {
      title: "American Spirits",
      amount: 250.50,
      date: new Date(2023, 5, 17),
      id: 12
    },
    {
      title: "Espresso",
      amount: 200.00,
      date: new Date(2021, 5, 17),
      id: 13
    },
    {
      title: "Cheese",
      amount: 5000.00,
      date: new Date(2022, 5, 17),
      id: 14
    },
    {
      title: "Gas",
      amount: 50.00,
      date: new Date(2023, 5, 17),
      id: 145
    },
    {
      title: "Books",
      amount: 30.30,
      date: new Date(2023, 5, 17),
      id: 15
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const handleAddExpense = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }
  return (
    <>
    <NewExpense onAddExpense={handleAddExpense} />
      <Expense 
        expense = {expenses}
      />

    </>
  );
}
export default App
