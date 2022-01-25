import React, { useContext } from "react"
import AppContext from "./AppContext"

const TotalResult = () => {
  const {totalIncome,totalExpense} = useContext(AppContext)
  const color = totalIncome + totalExpense > 0 ? "text-green-500 text-right" : "text-red-500 text-right"

  return (
    <p className={color}>
      {totalIncome + totalExpense}
    </p>
  )
}

export default TotalResult