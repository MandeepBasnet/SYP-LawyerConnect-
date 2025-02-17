/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Lawyers = () => {

  const { practice } = useParams()
  const [filterLaw,setFilterLaw] = useState([])
  const navigate = useNavigate()

  const {lawyers} = useContext(AppContext)

  const applyFilter = () => {
    if (practice) {
      setFilterLaw(lawyers.filter(law => law.practice === practice))
    } else {
      setFilterLaw(lawyers)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [lawyers, practice])

  console.log(practice)

  return (
    <div>
      <p className='text-gray-600'>Browse through practicing field of our lawyers.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={() => practice === 'Property Law' ? navigate('/lawyers') : navigate('/lawyers/Property Law')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${practice === "Property Law" ? "bg-primary text-white" : ""}'}>Property Law</p>
          <p onClick={() => practice === 'Labour Law' ? navigate('/lawyers') : navigate('/lawyers/Labour Law')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${practice === "Labour Law" ? "bg-primary text-white" : ""}'}>Labour Law</p>
          <p onClick={() => practice === 'Criminal Law' ? navigate('/lawyers') : navigate('/lawyers/Criminal Law')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${practice === "Criminal Law" ? "bg-primary text-white" : ""}'}>Criminal Law</p>
          <p onClick={() => practice === 'International Law' ? navigate('/lawyers') : navigate('/lawyers/International Law')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${practice === "International Law" ? "bg-primary text-white" : ""}'}>International Law</p>
          <p onClick={() => practice === 'Contract Law' ? navigate('/lawyers') : navigate('/lawyers/Contract Law')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${practice === "Contract Law" ? "bg-primary text-white" : ""}'}>Contract Law</p>
          <p onClick={() => practice === 'Family Law' ? navigate('/lawyers') : navigate('/lawyers/Family Law')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${practice === "Family Law" ? "bg-primary text-white" : ""}'}>Family Law</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterLaw.map((item, index) => (
              <div onClick={() => navigate(`/appointment/${item._id}`)} className='border border-gray-300 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img className='bg-blue-50' src={item.image} alt="" />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 rounded-full bg-green-500'></p><p>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm '>{item.practice}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Lawyers