import React, { useContext } from 'react';
import AppContext from './AppContext';

const Expense = () => {
const {totalExpense} = useContext(AppContext)
  return (
    <p>{totalExpense}</p>
  );
};

export default Expense;