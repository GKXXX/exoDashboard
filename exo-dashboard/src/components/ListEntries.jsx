import { React, useContext } from "react";
import AppContext from "./AppContext"

const ListEntries = () => {
  const {entries} = useContext(AppContext)

  return (
    <>
    
    {entries.map((entry,id) => (
      <tr key={id} className={id%2 === 1 ? ("bg-gray-100") : ( null )}>
        {entry.amount > 0 ? (
          <>
            <td className="border-2 border-stone-800 w-1/2 p-2 text-right">
              <p className="break-all">{entry.description}</p>
              <p className="text-green-500 ">{entry.amount} </p>
            </td >
            <td className="border-2 border-stone-800 w-1/2 p-2 text-right">
            </td>
          </>
        ) : (
          <>
            <td className="border-2 border-stone-800 w-1/2 p-2 text-right">
            </td>
            <td className="border-2 border-stone-800 w-1/2 p-2 text-right">
              <p className="break-all">{entry.description}</p>
              <p className="text-red-500 ">{entry.amount}</p>
            </td>
          </>)
          }
        
        
      </tr>
        )
      )
    }
    
    </>
  )
}

export default ListEntries