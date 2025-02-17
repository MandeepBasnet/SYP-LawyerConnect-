/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div>
        {/* Left Side */}
        <div>
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum illo aliquam ex et quasi itaque sequi eum suscipit officiis a, quod voluptatum nihil. Ducimus atque praesentium architecto incidunt, molestiae unde?</p>
        </div>

        {/* Center Side */}
        <div>
          <p>COMPANHY</p>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Side */}
        <div>
          <p>GET IN TOUCH</p>
          <ul>
            <li>+1 234 567 890</li>
            <li>info@lawyerconnect.com</li>
          </ul>
        </div>
      </div>
      <div>
        {/* Copyright Text */}
        <div>
          <hr />
          <p>&copy; 2023 Lawyer Connect. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer