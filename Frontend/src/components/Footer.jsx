/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* Left Side */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum illo aliquam ex et quasi itaque sequi eum suscipit officiis a, quod voluptatum nihil. Ducimus atque praesentium architecto incidunt, molestiae unde?</p>
        </div>

        {/* Center Side */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Side */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1 234 567 890</li>
            <li>info@lawyerconnect.com</li>
          </ul>
        </div>
      </div>
      <div>
        {/* Copyright Text */}
        <div>
          <hr />
          <p className='py-5 text-sm text-center'>&copy; 2025 Lawyer Connect. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer