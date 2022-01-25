import React, { useContext } from 'react';
import AppContext from './AppContext';

const Income = () => {
  const {totalIncome} = useContext(AppContext)
  return (
      <p>{totalIncome}</p>
  );
};

export default Income;