import Expense from "../src/components/Expense"
import Header from "../src/components/header"
import Income from "../src/components/Income"
import ListEntries from "../src/components/ListEntries"
import TotalResult from "../src/components/TotalResult"

const Home = () => {
  return (
    
    <div className='w-3/4 mx-auto min-h-screen'>
      <Header pageTitle='Journal'></Header>
      <table className='w-full rounded'>
        <thead className='text-left text-xl rounded'>
          <tr>
            <th className='w-1/2 p-1 border-2 border-stone-800 rounded'>Recettes</th>
            <th className='w-1/2 p-1 border-2 border-stone-800 rounded'>Dépenses</th>
          </tr>
        </thead>
        <tbody>
          <ListEntries></ListEntries>
          <tr className='w-full text-xl'>
            <td className='w-1/2 p-1 border-2 border-stone-800'>
              <div className='flex flex-row items-center justify-between'><p className="font-bold">Total des recettes</p><Income></Income>
              </div>
            </td>
            <td className='w-1/2 p-1 border-2 border-stone-800'>
              <div className='flex flex-row items-center justify-between'><p className="font-bold">Total des dépenses</p><Expense></Expense>
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot className='w-full border-2'>
          <tr colSpan="2" className=" p-1 border-2 border-stone-800">
            
              <td colSpan='2' className="p-2 font-bold">Résultats<TotalResult></TotalResult></td>
            
          </tr>
        </tfoot>
        
      </table>
    </div>
  )
}

export default Home