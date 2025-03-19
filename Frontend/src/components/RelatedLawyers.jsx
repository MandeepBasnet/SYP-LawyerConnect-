// eslint-disable-next-line no-unused-vars
import React, {useContext, useEffect, useState} from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const RelatedLawyers = ({practice,lawyerId}) => {

  const {lawyers} = useContext(AppContext)
  const navigate = useNavigate();

  const [relLaw, setRelLaw] = useState([])

  useEffect(() => {
    if (lawyers.length > 0 && practice) {
      const lawyersData = lawyers.filter((law)=> law.practice === practice && law._id !== lawyerId)
      setRelLaw(lawyersData)
      
    }
  }, [lawyers, practice, lawyerId])

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium'>Top Lawyers here</h1>
      <p className='sm:w-1/3 text-center text-sm'>Here is a list of top lawyers in the country.</p>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {relLaw.slice(0,5).map((item, index) => (
          <div onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0, 0)}} className='border border-gray-300 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
            <img className='bg-blue-50' src={item.image} alt="" />
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                <p className='w-2 h-2 rounded-full bg-green-500'></p><p>Available</p>
              </div>
              <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
              <p className='text-gray-600 text-sm '>{item.practice}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={()=>{navigate('/lawyers'); scrollTo(0, 0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>more</button>
    </div>
  )
}

export default RelatedLawyers