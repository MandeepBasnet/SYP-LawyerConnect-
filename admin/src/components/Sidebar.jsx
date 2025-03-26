import React from 'react'
import {useContext} from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {

  const {aToken} = useContext(AdminContext)
  return (
    <div>
      {
        aToken && <ul>
          <NavLink>
            <img src={assets.home_icon} alt="" />
            <p>Dashboard</p>
          </NavLink>

          <NavLink>
            <img src={assets.appointment_icon} alt="" />
            <p>Appointments</p>
          </NavLink>

          <NavLink>
            <img src={assets.add_icon} alt="" />
            <p>Add Lawyers</p>
          </NavLink>

          <NavLink>
            <img src={assets.people_icon} alt="" />
            <p>Lawyers List</p>
          </NavLink>
        </ul>
      }
    </div>
  )
}

export default Sidebar