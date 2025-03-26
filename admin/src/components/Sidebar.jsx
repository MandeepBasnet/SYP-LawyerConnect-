import React from 'react'
import {useContext} from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {

  const {aToken} = useContext(AdminContext)
  return (
    <div className='min-h-screen bg-white border-r'>
      {
        aToken && <ul className='text-[#515151] mt-5'>
          <NavLink className={({isActive}) => `flex items-center gap-5 py-3.5 px-3 md:px-9 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[#4682B4] ' :''}`} to={'/admin-dashboard'}>
            <img src={assets.home_icon} alt="" />
            <p>Dashboard</p>
          </NavLink>

          <NavLink className={({isActive}) => `flex items-center gap-5 py-3.5 px-3 md:px-9 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[#4682B4] ' :''}`} to={'/all-appointments'}>
            <img src={assets.appointment_icon} alt="" />
            <p>Appointments</p>
          </NavLink>

          <NavLink className={({isActive}) => `flex items-center gap-5 py-3.5 px-3 md:px-9 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[#4682B4] ' :''}`} to={'/add-lawyer'}>
            <img src={assets.add_icon} alt="" />
            <p>Add Lawyers</p>
          </NavLink>

          <NavLink className={({isActive}) => `flex items-center gap-5 py-3.5 px-3 md:px-9 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[#4682B4] ' :''}`} to={'/lawyer-list'}>
            <img src={assets.people_icon} alt="" />
            <p>Lawyers List</p>
          </NavLink>
        </ul>
      }
    </div>
  )
}

export default Sidebar