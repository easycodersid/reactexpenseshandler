import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expense';

let DUMMY_EXPENSES = [{
  id: "e1",
  title: "Tea bags",
  amount: 15,
  date: new Date(2022, 1, 1)
}, {
  id: "e2",
  title: "Foot ball",
  amount: 30,
  date: new Date(2022, 2, 2)
}, {
  id: "e3",
  title: "Mobile",
  amount: 500,
  date: new Date(2022, 3, 3)
}, {
  id: "e4",
  title: "Pens",
  amount: 2,
  date: new Date(2022, 4, 4)
}];

function App() {

  const [expensesArr, setExpensesArr] = useState(DUMMY_EXPENSES);

  // return new React.createElement('div', {},
  //   new React.createElement(NewExpense, {}),
  //   new React.createElement(Expenses, {
  //     items: items
  //   }),
  // )

  const addExpenseHandler = (expense) => {

    console.log(expense);

    setExpensesArr(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expensesArr} />
    </div>
  )
}

export default App;
