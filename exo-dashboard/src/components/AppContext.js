import { createContext, useCallback, useEffect, useState } from "react";


const AppContext = createContext({})

export const AppContextProvider = (props) => {
  const [entries,setEntries] = useState([{amount:10,description:"Test"}, {amount:-30,description:"Test"},{amount:10,description:"Test"}])
  const [totalIncome,setTotalIncome] = useState(0)
  const [totalExpense,setTotalExpense] = useState(0)

  useEffect(() => {
    let totalIncome = entries.reduce((total, actual) => {
      if (actual.amount > 0) {
        return Number(total) + Number(actual.amount)
      }
      return Number(total) + 0
    },0)
    console.log(totalIncome)
    setTotalIncome(totalIncome)
  },[entries])

  useEffect(() => {
    let totalExpense = entries.reduce((total,actual) => {
      if (actual.amount < 0) {
        return Number(total) + Number(actual.amount)
      }
      return Number(total) + 0
    },0)

    setTotalExpense(totalExpense)
  },[entries])

  const addEntry = useCallback(
    (entry) => setEntries((currentEntries) => [...currentEntries,entry]),
    []
  )

  return (
    <AppContext.Provider
      {...props}
      value={{ entries, addEntry,  totalIncome, totalExpense }}
    />
  )
}

export default AppContext