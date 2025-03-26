/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {React, useContext, useState} from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { LawyerContext } from '../context/LawyerContext'

const Login = () => {

  const [state, setState] = useState('Admin')
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {setAToken, backendUrl} = useContext(AdminContext)
  const {setLToken} = useContext(LawyerContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      // API Call
      if (state === 'Admin') {

        const {data} = await axios.post(backendUrl + '/api/admin/login', {email, password})
        if (data.success) {
          localStorage.setItem('aToken', data.token)
          setAToken(data.token)
        } else{
          toast.error(data.message)
        }

      } else {
        const {data} = await axios.post(backendUrl + '/api/lawyer/login', {email, password})
        if (data.success) {
          localStorage.setItem('lToken', data.token)
          setLToken(data.token)
          console.log(data.token)
        } else{
          toast.error(data.message)
        }
      }
    } catch (error) {
      
    }
  }



  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-4 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
        <p className='text-2xl font-semibold m-auto'><span className='text-[#4682B4]'>{state}</span> Login</p>
        <div className='w-full'>
          <p>Email</p>
          <input onChange={(e) => {setEmail(e.target.value)}} value={email} className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" required />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input onChange={(e) => {setPassword(e.target.value)}} value={password} className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" required />
        </div>
        <button  className='bg-[#4682B4] text-white w-full py-2 rounded-md text-base'>Login</button>
      {
        state === 'Admin' 
        ? <p>Lawyer Login? <span className='text-[#4682B4] cursor-pointer' onClick={()=> setState('Lawyer')}>Click Here</span></p>
        : <p>Admin Login? <span className='text-[#4682B4] cursor-pointer' onClick={()=> setState('Admin')}>Click Here</span></p>
      }
      </div> 
    </form>
  )
}

export default Login