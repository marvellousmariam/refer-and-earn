import React from 'react'
import { benefit, program } from '../constants/export'

const ReferBenefit = () => {
  return (
    <section>
      <h1 className=' text-center text-3xl font-bold block  uppercase text-nowrap my-5 mx-auto'>What are the<span className='text-primary'> Referral Benefit?</span></h1>
      <div className='flex flex-1 items-center justify-center my-9 gap-4'>
        <div className='w-1/6 h-auto border border-primary  p-8 rounded-md shadow-lg'>
       <div className='flex bg-primary justify-between items-center rounded-md ' >
        <h3 className='font-bold uppercase'>Programs</h3>
        <h3 className='font-bold text-xl  '>{'>'}</h3>
       </div>
       {
        program.map((prog)=>(
        <div className='flex justify-between items-center ' >
        <h3 className='text-sm uppercase'>{prog.name}</h3>
        <h3 className='text-lg'>{prog.icon}</h3> 
       </div>
        ))
       }
        </div>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right bg-blue-100  text-primary dark:text-primary">
        <thead class="text-xs text-primary uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col"  className="px-6 py-3">
                 Programs
                </th>
                <th scope="col" className="px-6 py-3">
                Referrer Bonus
                </th>
                <th scope="col" className="px-6 py-3">
                Referee Bonus
                </th>
            </tr>
        </thead>
        <tbody>
          
                {
                    
                    benefit.map((bene)=>(
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <td scope="row" className="px-6 py-4 font-medium text-primary whitespace-nowrap dark:text-white">
                    {bene.name}
                </td>
                <td className="px-20 py-4">
                    {bene.referalbonus}
                </td>
                <td className="px-20 py-4">
                    {bene.refreebonus}
                </td>
                </tr>
                    ))
                }
           
        </tbody>
    </table>
</div>

      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 my-6 ml-[50%] px-4 rounded">Refer Now</button>
    </section>
  )
}

export default ReferBenefit
