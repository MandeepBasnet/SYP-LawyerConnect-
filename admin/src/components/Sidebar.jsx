import React from 'react'
import {useContext} from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { LawyerContext } from '../context/LawyerContext'

const Sidebar = () => {

  const {aToken} = useContext(AdminContext)
  const {lToken} = useContext(LawyerContext)
  return (
    <div className='min-h-screen bg-white border-r'>
      {
        aToken && <ul className='text-[#515151] mt-5'>
          <NavLink className={({isActive}) => `flex items-center gap-5 py-3.5 px-3 md:px-9 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[#4682B4] ' :''}`} to={'/admin-dashboard'}>
            <img src={assets.home_icon} alt="" />
            <p className='hidden md:block'>Dashboard</p>
          </NavLink>

          <NavLink className={({isActive}) => `flex items-center gap-5 py-3.5 px-3 md:px-9 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[#4682B4] ' :''}`} to={'/all-appointments'}>
            <img src={assets.appointment_icon} alt="" />
            <p className='hidden md:block'>Appointments</p>
          </NavLink>

          <NavLink className={({isActive}) => `flex items-center gap-5 py-3.5 px-3 md:px-9 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[#4682B4] ' :''}`} to={'/add-lawyer'}>
            <img src={assets.add_icon} alt="" />
            <p className='hidden md:block'>Add Lawyers</p>
          </NavLink>

          <NavLink className={({isActive}) => `flex items-center gap-5 py-3.5 px-3 md:px-9 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[#4682B4] ' :''}`} to={'/lawyer-list'}>
            <img src={assets.people_icon} alt="" />
            <p className='hidden md:block'>Lawyers List</p>
          </NavLink>
        </ul>
      }

      {/* For Lawyer */}

      {
        lToken && <ul className='text-[#515151] mt-5'>
          <NavLink className={({isActive}) => `flex items-center gap-5 py-3.5 px-3 md:px-9 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[#4682B4] ' :''}`} to={'/lawyer-dashboard'}>
            <img src={assets.home_icon} alt="" />
            <p className='hidden md:block'>Dashboard</p>
          </NavLink>

          <NavLink className={({isActive}) => `flex items-center gap-5 py-3.5 px-3 md:px-9 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[#4682B4] ' :''}`} to={'/lawyer-appointments'}>
            <img src={assets.appointment_icon} alt="" />
            <p className='hidden md:block'>Appointments</p>
          </NavLink>


          <NavLink className={({isActive}) => `flex items-center gap-5 py-3.5 px-3 md:px-9 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[#4682B4] ' :''}`} to={'/lawyer-profile'}>
            <img src={assets.people_icon} alt="" />
            <p className='hidden md:block'>Profile</p>
          </NavLink>
        </ul>
      }
    </div>
  )
}

export default Sidebar