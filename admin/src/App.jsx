/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React , {useContext} from 'react'
import Login from './pages/Login.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext.jsx';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar.jsx';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard.jsx';
import AllAppointments from './pages/Admin/AllAppointments.jsx';
import AddLawyer from './pages/Admin/AddLawyer.jsx';
import LawyersList from './pages/Admin/LawyersList.jsx';

const App = () => {

  const {aToken} = useContext(AdminContext)
  return aToken ?  (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className=' flex items-start'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/admin-dashboard" element={<Dashboard/>} />
          <Route path="/all-appointments" element={<AllAppointments/>} />
          <Route path="/add-lawyer" element={<AddLawyer/>} />
          <Route path="/lawyer-list" element={<LawyersList/>} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
    <Login/>
    <ToastContainer />
    </>
  )
}

export default App