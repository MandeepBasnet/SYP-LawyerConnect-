/* eslint-disable no-unused-vars */
import React from 'react'
import {practiceData} from '../assets/assets'
import { Link } from 'react-router-dom'

const PracticeArea = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='practice'>
      <h1 className='text-3xl font-medium'>Find by Practice Area</h1>
      <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted lawyers and select the one that best suits your needs while scheduling a hassle-free appointment.</p>
      <div className='flex justify-center gap-4 pt-5 w-full overflow-scroll'>
        {practiceData.map((item,index) => (
          <Link onClick={()=>scrollTo(0, 0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/lawyers/${item.practice}`}>
            <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
            <p>{item.practice}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PracticeArea