// eslint-disable-next-line no-unused-vars
import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-grey-500'>
        <p>CONTACT <span>US</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb28 text-sm'>
        <img className='w-full md:mx-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center iteams-start gap-6 '>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'> 10th Downing Street <br />Downing Street, London, England</p>
          <p className='text-gray-500'> tel: 123 456- 23456 <br /> contact@lawyerconnect.com</p>
          <p className='font-semibold text-lg text-gray-600'>Careers at Lawyer Connect</p>
          <p className='text-gray-500'>Learn more about out teams and job openings.</p>
          <button className='border border-black px8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div> 
    </div>
  )
}

export default Contact